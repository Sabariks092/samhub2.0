"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="sofax-counter-wrap-v5">
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={500} duration={3} redraw={true} enableScrollSpy />+
				</h2>
				<p>Happy Clients</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={700} duration={3} redraw={true} enableScrollSpy />+
				</h2>
				<p>Projects Completed</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={100} duration={3} redraw={true} enableScrollSpy />%
				</h2>
				<p>Client Satisfaction</p>
			</div>
		</div>
	);
}

export default AboutCounter;
