import '../styles/Resume.css'
import useDownloader from 'react-use-downloader';
import resume from '../assets/FunctionalResume.docx'

export default function Resume() {

  const { size, elapsed, percentage, cancel, error, isInProgress } =
  useDownloader();

  const fileUrl = {resume};
  const filename = 'resume';

  const { download } = useDownloader({
    mode: 'no-cors',
    credentials: 'include',
    headers: {
      Authorization: 'Bearer TOKEN',
    },
  });
    return (
      <>
      <div className='resume'>
        <h1><u>Joseph G. Kamil </u></h1>

        <p><u>Phone:</u> (238) 893-5223 | Email: kamilj@umich.edu |
          4237 Via Marina apt J112 Marina Del Rey, Ca LinkedIn: /Joseph-Kamil |
          Portfolio: kamilj62.github.com | </p>

        <p><u>Objective:</u> A highly motivated and detail-oriented software engineer
          seeking to use my expertise in software development and computer
          programming to provide innovative solutions and outstanding customer
          service at ABC Company. </p>

        <p><u>Summary:</u>  I am a detail-oriented and dependable software developer
          with a background in full-stack development.  I received my certificate
          from UCLA extension.  I am highly proficient in  HTML, CSS and Javascript.
          I balance exemplary leadership, technical, and communication skills with a
          collaborative, goal-oriented mindset to execute project deliverables and to
          fulfill objectives.</p>

        <p><u>Technical Skills:</u> JavaScript ES6+, CSS3, HTML5, SQL, GitHub, MongoDB, MySQL,
          Express, React, Node, Handlebars, jQuery, Bootstrap  </p>

        <p><u>Experience:</u> Full Stack Software Engineer, Freelance, <strong>Flow-Tekton</strong> </p>

        <ul>
          <li>Tekton Construction Technologies is a cloud-based document management solution
            focused on workforce management in the construction space.</li>
          <li>Convade  mobile responsiveness to the login and registration page.</li>
          <li>Assisted colleagues with the implementation of and continued usage of libraries
            and frameworks that helped improve UI experience of the users profile page.</li>
          <li>Collaborated with team members using React and other third-party libraries
            to build an effortless front-end experience.</li>
          <li>Utilized source control code (Git and GitHub) to track, manage and implement
            code changes.</li>
          <li>Performed debugging, troubleshooting and worked with peers for the
            implementation of complex components.</li>
        </ul>

        <p><u>Education: </u></p>

        <ul>
          <li>UCLA Extension Full Stack Developer, Certificate	</li>
          <li>University of Michigan Bachelors of Science , Zoology Ann Arbor, MI	</li>
          <li>Wayne State University Post-Baccalaureate Detroit, Mi  </li>
        </ul>
      </div>

      <div className="App">
          <p>Download is in {isInProgress ? 'in progress' : 'stopped'}</p>
          <button onClick={() => download(fileUrl, filename)}>
            Click to download the file
          </button>
          <button onClick={() => cancel()}>Cancel the download</button>
          <p>Download size in bytes {size}</p>
          <label htmlFor="file">Downloading progress:</label>
          <progress id="file" value={percentage} max="100" />
          <p>Elapsed time in seconds {elapsed}</p>
          {error && <p>possible error {JSON.stringify(error)}</p>}
        </div></>
    );
  }