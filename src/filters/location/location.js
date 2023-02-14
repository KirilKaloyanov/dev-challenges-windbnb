import styles from './location.module.css';

export default function Location({expanded, onSelect}) {
    return (
        <div 
            onClick={onSelect} 
            className={`${styles.main} ${expanded && styles.expandedFilterItem}`}
        >
        {expanded && <div>Location</div>}
        <div>Add location</div>
        </div>
    );
}