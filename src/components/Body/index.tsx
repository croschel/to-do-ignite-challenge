import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../@types/task";
import clipboard from "../../assets/clipboard.svg";
import plus from "../../assets/plus.svg";
import { TaskItem } from "../TaskItem";
import styles from "./styles.module.scss";

export const Body: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        description: newTask,
        createdAt: new Date(),
        isDone: false,
        updatedAt: new Date(),
      },
    ]);
    setNewTask("");
  };

  const handleDeleteTask = (taskItem: Task) => {
    const filteredTaskList = taskList.filter((task) => task.id !== taskItem.id);
    setTaskList(filteredTaskList);
  };

  const handleCloseTask = (taskItem: Task) => {
    const updatedTaskList = taskList.map((task) => {
      if (taskItem.id === task.id) {
        return {
          ...task,
          isDone: !taskItem.isDone,
        };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const handleTaskCounter = () => {
    if (taskList.length === 0) {
      return 0;
    }
    const closedTasks = taskList.filter((task) => task.isDone === true);
    return `${closedTasks.length} de ${taskList.length}`;
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.taskBarContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit" disabled={newTask.length === 0}>
            <p>Criar</p>
            <img src={plus} alt="plus" />
          </button>
        </form>
      </div>
      <div className={styles.taskListContainer}>
        <div className={styles.taskListHeader}>
          {/* Left Counter */}
          <div className={styles.leftContent}>
            <p>Tarefas Criadas</p>
            <div className={styles.counter}>{taskList.length}</div>
          </div>
          {/* Right Counter */}
          <div className={styles.rightContent}>
            <p>Concluídas</p>
            <div className={styles.counter}>{handleTaskCounter()}</div>
          </div>
        </div>
        {taskList.length === 0 ? (
          <div className={styles.emptyTaskBox}>
            <img src={clipboard} alt="clipboard" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className={styles.taskListBox}>
            {taskList.map((task) => (
              <TaskItem
                task={task}
                onDelete={handleDeleteTask}
                onClose={handleCloseTask}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
