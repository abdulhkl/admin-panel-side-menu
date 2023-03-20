import SidebarItem from './SidebarItem';
import items from '../../data/sidebar.json';
import styles from './Sidebar.module.css';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			{items.map((item) => (
				<SidebarItem key={item.key} item={item} />
			))}
		</div>
	);
}
