import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="m-3 text-center">Question & Answer</h1>
      <div className="card text-center w-75 my-5 mx-auto">
        <div className="card-header">
          <h4> Difference between SQL and NoSQL</h4>
        </div>
        <div className="card-body text-start m-2 fs-5 d-flex flex-lg-row flex-column justify-content-between aling-items-center">
          <div>
            <p className="fw-bold text-center">SQL</p>
            <ul>
              <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
              <li>These databases have fixed or static or predefined schema</li>
              <li>
                These databases are not suited for hierarchical data storage.
              </li>
              <li>These databases are best suited for complex queries</li>
            </ul>
          </div>
          <div>
            <p className="fw-bold text-center">NoSQL</p>
            <ul>
              <li>Non-relational or distributed database system.</li>
              <li>They have dynamic schema</li>
              <li>
                These databases are best suited for hierarchical data storage.
              </li>
              <li>These databases are not so good for complex queries</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card text-center w-75 my-5 mx-auto">
        <div className="card-header">
          <h4> What is JWT, and how does it work?</h4>
        </div>
        <div className="card-body text-start m-2 fs-5">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.
            <br />
            It is compact, readable and digitally signed using a private key/ or
            a public key pair by the Identity Provider(IdP). So the integrity
            and authenticity of the token can be verified by other parties
            involved.
            <br />
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            <br />
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information.
          </p>
        </div>
      </div>
      <div className="card text-center w-75 my-5 mx-auto">
        <div className="card-header">
          <h4> How does NodeJS handle multiple requests at the same time?</h4>
        </div>
        <div className="card-body text-start m-2 fs-5">
          <p>
            We know NodeJS application is single-threaded. Say, if processing
            involves request A that takes 10 seconds, it does not mean that a
            request which comes after this request needs to wait 10 seconds to
            start processing because NodeJS event loops are only
            single-threaded. The entire NodeJS architecture is not
            single-threaded.
            <br />
            <br />
            How NodeJS handle multiple client requests?
            <br />
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue.
            <br />
            <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </div>
      </div>
      <div className="card text-center w-75 my-5 mx-auto">
        <div className="card-header">
          <h4> What is the difference between javascript and NodeJS?</h4>
        </div>
        <div className="card-body text-start m-2 fs-5 d-flex flex-lg-row flex-column justify-content-between aling-items-center">
          <div>
            <p className="fw-bold text-center">JavaScript</p>
            <ul>
              <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
              <li>It's most commonly used on client-side servers.</li>
              <li>
              The node community does not care about JavaScript.
              </li>
              <li>It's made for creating network-centric apps.</li>
            </ul>
          </div>
          <div>
            <p className="fw-bold text-center">Node.js</p>
            <ul>
              <li>It's a bridge, open-source Js runtime environment for executing Js on the server.</li>
              <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</li>
              <li>
              It's mainly popular on the server-side.
              </li>
              <li>All node projects represent the JavaScript community.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
