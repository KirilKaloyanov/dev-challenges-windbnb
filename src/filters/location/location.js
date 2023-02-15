import css from './location.module.css';

export default function Location({expanded, activeFilter, onSelect}) {
    return (
        <div 
            onClick={onSelect} 
            className={`${css.main} ${expanded && css.expandedFilterItem}`}
        >
            <div className={expanded && activeFilter === 'location' ? css.containerActive : css.container}>
                {expanded && <div className={css.uppercase}>Location</div>}
                <div className={css.placeholder}>Add location</div>
            </div>
        </div>
    );
}