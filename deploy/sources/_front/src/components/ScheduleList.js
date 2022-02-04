const Schedule = ({schedule}) => {
    return (
        <tr className="schedule-row">
            <td>
                {schedule.id}
            </td>
            <td>
                {schedule.date_time}
            </td>
            <td>
                {schedule.film}
            </td>
        </tr>
    )
}

const ScheduleList = ({schedules}) => {
    return (
        <div className={"schedule-list"}>
            <h1>Schedules</h1>
            <table className={"schedule-list"}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>date_time</th>
                    <th>film</th>
                </tr>
                </thead>
                <tbody>
                {schedules.map((schedule) => <Schedule key={schedule.id} schedule={schedule}/>)}
                </tbody>
            </table>
        </div>
    )
}

export  default ScheduleList;
