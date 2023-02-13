import styles from './location.module.css';

export default function Location({expanded, activeFilter, onSelect}) {
    return (
        <div 
            onClick={onSelect} 
            className={`${styles.main} ${expanded && styles.expandedFilterItem}`}
        >
        <div>location</div>
        </div>
    );
}