import { useEffect, useState } from 'react';
import { Filter } from '../types/Filter';
import { Todo } from '../types/Todo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FooterProps {
  setFilter: (filter:Filter) => void,
  filter: Filter,
  todos:Todo[],
  removeAllCompleted:()=>void,
}

export const Footer: React.FC<FooterProps> = ({
  setFilter, filter, todos, removeAllCompleted,
}) => {
  const [areCompleted, setAreCompleted]
    = useState(todos.some(todo => todo.completed));

  useEffect(() => {
    setAreCompleted(todos.some(todo => todo.completed));
  }, [todos]);

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${todos.filter(todo => !todo.completed).length} item${todos.length > 1 ? 's' : ''} left`}
      </span>
      <nav className="filter">
        <a
          href="#/"
          className={`filter__link ${filter === 'all' ? 'selected' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${filter === 'active' ? 'selected' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${filter === 'completed' ? 'selected' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </a>
      </nav>
      {areCompleted
       && (
         <button
           type="button"
           className="todoapp__clear-completed"
           onClick={removeAllCompleted}
         >
           Clear completed
         </button>
       )}
    </footer>
  );
};
