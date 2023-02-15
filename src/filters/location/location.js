import css from './location.module.css';

export default function Location({expanded, activeFilter, onSelect, location}) {
    return (
        <div 
            onClick={onSelect} 
            className={`${css.main} ${expanded && css.expandedFilterItem}`}
        >
            <div className={expanded && activeFilter === 'location' ? css.containerActive : css.container}>
                {expanded && <div className={css.uppercase}>Location</div>}
                {!location && <div className={css.placeholder}>Add location</div>}
                {location && <div>{location}</div>}
            </div>
        </div>
    );
}