import authReducer from "./auth/authSlice";
import taskReducer from "./tasks/tasksSlice";

import { authService } from "./auth/authService";
import { tasksService } from "./tasks/tasksService";

export { authReducer, authService, taskReducer, tasksService };
