import os
import random

import cv2
from ultralytics import YOLO

# from tracker import Tracker

classes = ["person","bicycle","car","motorbike","aeroplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","sofa","pottedplant","bed","diningtable","toilet","tvmonitor","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"]
video_path =os.path.join('.','data','test.mp4')
video_out_path = os.path.join('.', 'out.mp4')

cap = cv2.VideoCapture(video_path)
ret, frame = cap.read()
#cap_out = cv2.VideoWriter(video_out_path, cv2.VideoWriter_fourcc(*'MP4V'), cap.get(cv2.CAP_PROP_FPS),(frame.shape[1], frame.shape[0]))
print(ret)
model = YOLO("yolov8n.pt")

while ret:
    results = model(frame)
    for result in results:
        for r in result.boxes.data.tolist():
            x1, y1, x2, y2, score, class_id = r
            x1 = int(x1)
            x2 = int(x2)
            y1 = int(y1)
            y2 = int(y2)
            class_id = int(class_id)
            # print(classes[class_id],score)
            frame = cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
        
        cv2.imshow('frame', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    ret, frame = cap.read()

# for result in results:
#     # print(result.boxes.data.tolist())
#     detections = []
#     for r in result.boxes.data.tolist():
#         x1, y1, x2, y2, score, class_id = r
#         x1 = int(x1)
#         x2 = int(x2)
#         y1 = int(y1)
#         y2 = int(y2)
#         class_id = int(class_id)
#         print(classes[class_id],score)


# colors = [(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)) for j in range(10)]

# detection_threshold = 0.5

    
#             if score > detection_threshold:
#                 detections.append([x1, y1, x2, y2, score])
#             # frame =  cv2.rectangle(frame, (x1, y1), (x2,y2), (0,255,0), 2)
# #         # tracker.update(frame, detections)

# #         # for track in tracker.tracks:
# #         #     bbox = track.bbox
# #         #     x1, y1, x2, y2 = bbox
# #         #     track_id = track.track_id

# #         #     cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (colors[track_id % len(colors)]), 3)

# #     # cap_out.write(frame)
#     ret, frame = cap.read()
    

cap.release()
# cap_out.release()
cv2.destroyAllWindows()