import PropTypes from 'prop-types';
import { useState } from 'react';
import Checkbox from './Checkbox';
import styles from './SidebarItem.module.css';

function SidebarItem({ item, level = 0 }) {
	const [open, setOpen] = useState(true);
	level++;
	if (item.nodes && item.nodes.length > 0) {
		return (
			<div
				className={`${
					open
						? [styles['sidebar-item'], styles['open']].join(' ')
						: styles['sidebar-item']
				}`}
			>
				<div className={styles['sidebar-title']}>
					<Checkbox level={level} item={item} />
					<i
						className={[['bi-chevron-down'], styles['toggle-btn']].join(' ')}
						onClick={() => setOpen(!open)}
					></i>
				</div>
				<div className={styles['sidebar-content']}>
					{item.nodes.map((child, index) => (
						<SidebarItem level={level} key={index} item={child} />
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles['sidebar-title']}>
				<Checkbox item={item} level={level} />
			</div>
		);
	}
}

SidebarItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default SidebarItem;
