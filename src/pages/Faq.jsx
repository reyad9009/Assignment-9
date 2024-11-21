import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col gap-5 lg:mt-16 lg:w-[60%] w-[95%]">
      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. How does the Career Counseling Website personalize advice?
        </div>
        <div className="collapse-content">
          <p>
            We use detailed assessments and user-provided information to
            recommend career paths, skill-building resources, and actionable
            steps tailored to individual goals.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          2. Is the Career Counseling Website free to use?
        </div>
        <div className="collapse-content">
          <p>
            Our website offers free basic career guidance and resources. For
            advanced services like one-on-one counseling and workshops,
            subscription plans are available.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          3. Can I book a session with a career counselor?
        </div>
        <div className="collapse-content">
          <p>
            Yes, users can book online or offline sessions with certified career
            counselors directly through our platform.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          4. What kind of assessments are available on the website?
        </div>
        <div className="collapse-content">
          <p>
            We provide aptitude tests, personality assessments, and
            interest-based career quizzes to help users understand their
            strengths and preferences.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          5. Does the platform assist with college or job applications?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer application guidance, document reviews, and tips to
            create compelling resumes and cover letters for colleges and job
            opportunities.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          6. Who are the career counselors on the platform?
        </div>
        <div className="collapse-content">
          <p>Our career counselors are certified professionals with extensive experience in career guidance, education planning, and job market trends.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
         7. Can students use the Career Counseling Website?
        </div>
        <div className="collapse-content">
          <p>Absolutely! We provide specialized resources and counseling for students to help them choose the right courses, colleges, and career paths.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 border shadow-xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
      8. Does the website help professionals looking to switch careers?
        </div>
        <div className="collapse-content">
          <p>Yes, we support career transitions by offering guidance, skill-building resources, and industry insights tailored to professionals seeking a change.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
