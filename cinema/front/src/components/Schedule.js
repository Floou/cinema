const Schedule = ({schedule}) => {
    console.log('schedule', schedule);
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
    console.log('schedules', schedules);
    return (
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
    )
}

export  default ScheduleList;
