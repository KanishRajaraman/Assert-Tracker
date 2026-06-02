import cv2
import numpy as np

# Camera-based ArUco detection + (optional) pose estimation
# - Press 'q' to quit.
# - Pose estimation requires camera calibration (cameraMatrix + distCoeffs)
#   and the physical marker side length (marker_length).

aruco_dict = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_6X6_250)
parameters = cv2.aruco.DetectorParameters()

detector = cv2.aruco.ArucoDetector(aruco_dict, parameters)

# ====== REQUIRED FOR POSE (FILL THESE IN) ======
# Physical marker size (side length). Example: 0.02 means 2 cm.
marker_length = 0.02  # TODO: replace with your marker's real size in meters

# Camera intrinsics (from calibration)
# TODO: paste your actual cameraMatrix (3x3) and distCoeffs (typically 1x5 or 1x8)
cameraMatrix = None  # np.array([[...],[...],[...]], dtype=np.float64)
distCoeffs = None     # np.array([...], dtype=np.float64)

# ===============================================

cap = cv2.VideoCapture(0)
if not cap.isOpened():
    raise RuntimeError("Could not open camera (index 0).")

pose_enabled = (cameraMatrix is not None) and (distCoeffs is not None)

print("Pose estimation:", "ENABLED" if pose_enabled else "DISABLED (missing calibration)")
if not pose_enabled:
    print("Provide cameraMatrix and distCoeffs to enable rvec/tvec + axis drawing.")

while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    corners, ids, rejected = detector.detectMarkers(gray)

    if ids is not None:
        cv2.aruco.drawDetectedMarkers(frame, corners, ids)

        ids_list = ids.flatten().tolist()
        print("Detected markers:", ids_list)

        if pose_enabled:
            # corners: (N, 1, 4, 2)
            # estimatePoseSingleMarkers returns rvecs/tvecs with shape (N, 1, 3)
            rvecs, tvecs, _objPoints = cv2.aruco.estimatePoseSingleMarkers(
                corners, marker_length, cameraMatrix, distCoeffs
            )

            for i, marker_id in enumerate(ids_list):
                rvec = rvecs[i][0]
                tvec = tvecs[i][0]

                # Draw axes (axis_length is in same units as marker_length)
                axis_length = marker_length * 0.5
                cv2.aruco.drawAxis(
                    frame, cameraMatrix, distCoeffs, rvec, tvec, axis_length
                )

                print(f"  id={marker_id} rvec={rvec.tolist()} tvec={tvec.tolist()}")

    cv2.imshow("Detected Markers (press q to quit)", frame)

    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()


