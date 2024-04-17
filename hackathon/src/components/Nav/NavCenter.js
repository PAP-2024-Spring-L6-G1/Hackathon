import CountdownTimer from './Countdown/CountdownTimer';

export default function NavCenter() {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    const navCenterStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div className='semibold text-xl text-slate-100' style={navCenterStyle}>Hackathon begins in: <CountdownTimer targetDate={dateTimeAfterThreeDays} /></div>
    )
}