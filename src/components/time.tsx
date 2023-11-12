import { useState, useEffect } from "react";

type TimeRemaining = {
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer: React.FC = () => {
  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(23, 59, 0, 0); // Set the target time to 11:59 PM

    const timeDifference = targetTime.getTime() - now.getTime();

    if (timeDifference <= 0) {
      // The target time has already passed, so return 0 for hours, minutes, and seconds.
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    const countdown = setInterval(() => {
      const updatedTime = calculateTimeRemaining();
      setTime(updatedTime);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <main className="countdown-timer text-white flex items-center mt-4 gap-x-5" data-aos="fade-down">
      <div className="flex items-end animate__animated animate__fadeInUp animate__fast">
        <span className="timer-item tracking-tighter text-4xl md:text-5xl font-medium">{formatTime(time.hours)}</span>
        <span className="text-sm inline mb-[2px] ml-[5px]">H</span>
      </div>
      <div className="flex items-end animate__animated animate__fadeInUp animate__fast">
        <span className="timer-item tracking-tighter text-4xl md:text-5xl font-medium">{formatTime(time.minutes)}</span>
        <span className="text-lg inline mb-[2px] ml-[5px]">M</span>
      </div>
      <div className="flex items-end animate__animated animate__fadeInUp	animate__slow">
        <span className="timer-item tracking-tighter text-4xl md:text-5xl font-medium">{formatTime(time.seconds)}</span>
        <span className="text-lg inline mb-[2px] ml-[5px]">S</span>
      </div>
    </main>
  );
};

export default CountdownTimer;
