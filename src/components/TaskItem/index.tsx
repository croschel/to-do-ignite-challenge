import { useState } from "react";
import { Task } from "../../@types/task";
import trash from "../../assets/trash.svg";
import check from "../../assets/check.svg";
import styles from "./styles.module.scss";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
  onClose: (task: Task) => void;
}

export const TaskItem = ({ task, onDelete, onClose }: Props) => {
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.checkboxTask}>
        {task.isDone ? (
          <img
            src={check}
            alt={`task ${task.isDone} checkbox`}
            onClick={() => onClose(task)}
          />
        ) : (
          <div className={styles.checkBoxInput} onClick={() => onClose(task)} />
        )}
        <span className={task.isDone ? styles.descriptionTaskDone : ""}>
          {task.description}
        </span>
      </div>
      <button onClick={() => onDelete(task)} className={styles.removeButton}>
        <img src={trash} alt="remove task icon" />
      </button>
    </div>
  );
};
