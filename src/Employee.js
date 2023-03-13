function Employee(props) {
    return(
        <>
        <div className='emp-card'>
            <img src={props.img} />
            <h3>{ props.name }</h3>
            <h4>Designation: <span>{props.designation}</span></h4>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button>Let's Connect</button>
        </div> 
        </>
    );
}
export default Employee;