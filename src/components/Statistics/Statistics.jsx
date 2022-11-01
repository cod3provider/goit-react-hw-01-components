import PropTypes from 'prop-types';
import data from 'data/data.json';
import css from './Statistics.module.css';

import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
            <li className={css.listItem}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
