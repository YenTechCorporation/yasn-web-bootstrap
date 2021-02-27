import React from "react";
import "./SingleArticle.css";
function SingleArticle() {
  return (
    <div>
      <section className="banner-section"></section>
      <section className="post-content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">
              <h1 className="text-center">post Title goes here</h1>
              <ul className="list-inline text-center">
                <li>Author |</li>
                <li>Category |</li>
                <li>Date |</li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <p className="lead">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
              </p>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
                fringilla. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
              <div className="well ">
                <large>This is image</large>
              </div>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec id elit non mi porta gravida at eget metus. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit.
              </p>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
                fringilla. Duis mollis, est non commodo luctus, nisi erat
                porttitor ligula, eget lacinia odio sem nec elit. Donec
                ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec id elit non mi porta gravida at eget metus. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit.
              </p>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante. nascetur ridiculus mus. Donec
                  ullamcorper nulla non metus auctor fringilla. Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula, eget lacinia
                  odio sem nec elit. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </blockquote>

              <div className="image-block">
                <img
                  src="https://static.pexels.com/photos/268455/pexels-photo-268455.jpeg"
                  className="img-responsive"
                />
              </div>

              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Donec id elit non mi porta gravida at eget metus. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                odio sem nec elit.
              </p>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12">
              <div className="well">
                <h2>Subscription Box</h2>
                <p>Form Description Goes here</p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Go!
                    </button>
                  </span>
                </div>
              </div>
              <div className="well">
                <h2>Share love</h2>
                <ul className="list-inline">
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                  <li>
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    ></span>
                  </li>
                </ul>
              </div>
              <div className="well">
                <h2>About Author</h2>
                <img src="" className="img-rounded" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <a href="#" className="btn btn-default">
                  Read more
                </a>
              </div>
              <div className="list-group">
                <a className="list-group-item active" href="#">
                  {" "}
                  <h4 className="list-group-item-heading">
                    List group item heading
                  </h4>{" "}
                  <p className="list-group-item-text">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>{" "}
                </a>
                <a className="list-group-item" href="#">
                  {" "}
                  <h4 className="list-group-item-heading">
                    List group item heading
                  </h4>{" "}
                  <p className="list-group-item-text">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>{" "}
                </a>
                <a className="list-group-item" href="#">
                  {" "}
                  <h4 className="list-group-item-heading">
                    List group item heading
                  </h4>{" "}
                  <p className="list-group-item-text">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>{" "}
                </a>{" "}
              </div>
              <div className="well">
                <div className="media">
                  {" "}
                  <div className="media-left">
                    {" "}
                    <a href="#">
                      {" "}
                      <img
                        data-src="holder.js/64x64"
                        className="media-object"
                        alt="64x64"
                        style={{ width: "64px", height: "64px" }}
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTY5MjIxZTM1NSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NjkyMjFlMzU1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMi41IiB5PSIzNi44Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
                        data-holder-rendered="true"
                      />
                    </a>
                  </div>{" "}
                  <div className="media-body">
                    {" "}
                    <h4 className="media-heading">Media heading</h4> Cras sit
                    amet nibh libero, in gravida nulla.
                  </div>{" "}
                </div>
                <div className="media">
                  {" "}
                  <div className="media-left">
                    {" "}
                    <a href="#">
                      {" "}
                      <img
                        data-src="holder.js/64x64"
                        className="media-object"
                        alt="64x64"
                        style={{ width: "64px", height: "64px" }}
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTY5MjIxZTM1NSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NjkyMjFlMzU1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMi41IiB5PSIzNi44Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
                        data-holder-rendered="true"
                      />{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="media-body">
                    {" "}
                    <h4 className="media-heading">Media heading</h4> Cras sit
                    amet nibh libero, in gravida nulla.
                  </div>{" "}
                </div>
                <div className="media">
                  {" "}
                  <div className="media-left">
                    {" "}
                    <a href="#">
                      {" "}
                      <img
                        data-src="holder.js/64x64"
                        className="media-object"
                        alt="64x64"
                        style={{ width: "64px", height: "64px" }}
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTY5MjIxZTM1NSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NjkyMjFlMzU1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMi41IiB5PSIzNi44Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
                        data-holder-rendered="true"
                      />{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="media-body">
                    {" "}
                    <h4 className="media-heading">Media heading</h4> Cras sit
                    amet nibh libero, in gravida nulla.
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /container --> */}
      </section>
    </div>
  );
}

export default SingleArticle;
