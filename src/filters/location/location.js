import styles from './location.module.css';

export default function Location({expanded, onSelect}) {
    return (
        <div 
            onClick={onSelect} 
            className={`${styles.main} ${expanded && styles.expandedFilterItem}`}
        >
        <div>Add location</div>
        </div>
    );
}