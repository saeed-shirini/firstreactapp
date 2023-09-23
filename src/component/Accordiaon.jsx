
const Accordian = ({id,title,content,changeActiveElem,isActive,activeElem}) => {
    return (
        <div className="accordian">
            <div className="accordian-title" id={`act${id}`}>
                <button onClick={()=>changeActiveElem(id)}>{title}</button>
            </div>
            {isActive && activeElem === id && (
                <div className="accordian-body" id={`acb${id}`}>
                    <h3>{content}</h3>
                </div>
            )}
        </div>
    )
}

export default Accordian;