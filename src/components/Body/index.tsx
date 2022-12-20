import React, { useState } from 'react';
import clipboard from '../../assets/clipboard.svg';
import plus from '../../assets/plus.svg';
import styles from './styles.module.scss';

export const Body: React.FC = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.taskBarContainer}>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            value={newTask} 
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type='submit'>
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
        {taskList.length === 0 
          ? (
            <>
              <div className={styles.emptyTaskBox}>
                <img src={clipboard} alt="clipboard" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          )
          : (
            <div>
              List
            </div>
          )
        }

      </div>
    </main>
  );
}