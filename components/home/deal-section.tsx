'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DealSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          return { days: 1, hours: 23, minutes: 59, seconds: 59 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        {/* Banner */}
        <div
          className="
            w-full rounded-2xl overflow-hidden
            bg-gradient-to-r
            from-muted/60 to-muted
            dark:from-muted dark:to-background
          "
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/assets/img/floded/floded-01.png"
                  alt="Pro2 Abstract Folded Pots"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left mx-auto max-w-xl">
              {/* Price */}
              <div className="flex items-baseline gap-4 mb-4 justify-center lg:justify-start">
                <span className="text-2xl font-semibold text-primary">
                  $49.00
                </span>
                <span className="text-2xl text-muted-foreground line-through">
                  $59.00
                </span>
              </div>

              {/* Title */}
              <Link href="/shop-details">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                  Pro2 Abstract Folded Pots
                </h2>
              </Link>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                Turning Passion into Career – VTC Academy
              </p>

              {/* Countdown */}
              <div className="flex gap-4 justify-center lg:justify-start mb-6">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hour', value: String(timeLeft.hours).padStart(2, '0') },
                  { label: 'Minute', value: String(timeLeft.minutes).padStart(2, '0') },
                  { label: 'Second', value: String(timeLeft.seconds).padStart(2, '0') },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-card text-card-foreground rounded-lg px-4 py-3 shadow-sm min-w-[80px] border">
                      <div className="text-3xl font-bold">
                        {item.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <p className="text-sm text-muted-foreground italic">
                *Remains until the end of the offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
