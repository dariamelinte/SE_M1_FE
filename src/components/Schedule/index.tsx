import { Tab } from '@headlessui/react';
import cx from 'classnames';

import type { CategoryType } from './categories';
import { categories } from './categories';
import styles from './Schedule.module.css';

type ScheduleType = {
  type: number;
};

export const Schedule: React.FC<ScheduleType> = ({ type }) => {
  const category = categories[type] as CategoryType;

  return (
    <div className={styles.scheduleContainer}>
      <Tab.Group>
        <Tab.List className={styles.scheduleTabList}>
          {Object.keys(category).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                cx(styles.scheduleTab, selected ? 'bg-white' : 'bg-gray-200')
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {Object.values(category).map((posts, idx) => (
            <Tab.Panel key={idx} className="bg-white">
              <ul>
                {posts.map(({ id, title, subtitle, information }) => (
                  <div key={id} className={styles.scheduleContainerInfo}>
                    <h3 className={styles.titleInfo}>{title}</h3>
                    <h5 className={styles.subtitleInfo}>{subtitle}</h5>
                    <h5 className={styles.subtitleInfo}>{information}</h5>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <iframe
        src="https://discord.com/widget?id=946847523165864006&theme=dark"
        className="mt-3 w-full"
        style={{ minHeight: '400px' }}
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};
