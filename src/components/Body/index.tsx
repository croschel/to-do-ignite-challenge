import React, { useState } from "react";
import { Task } from "../../@types/task";
import clipboard from "../../assets/clipboard.svg";
import plus from "../../assets/plus.svg";
import { TaskItem } from "../TaskItem";
import styles from "./styles.module.scss";

const mock: Task[] = [
  {
    id: "1",
    description: "Some description for test this...",
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    description:
      "Some description for test this 2... addasdsadasdasdadadadas adasd asdaasd asd asd asdadadadsdasda",
    isDone: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const Body: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>(mock);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <button type="submit">
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
            <div className={styles.counter}>0</div>
          </div>
          {/* Right Counter */}
          <div className={styles.rightContent}>
            <p>Concluídas</p>
            <div className={styles.counter}>0</div>
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
