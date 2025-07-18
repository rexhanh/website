import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      <MDBFooter className="w-full text-center">
        <MDBContainer>
          <section>
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://www.linkedin.com/in/rexhanh/!"
              role="button"
            >
              <MDBIcon fab className="fa-linkedin" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="https://github.com/rexhanh"
              role="button"
            >
              <MDBIcon fab className="fa-github" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="mailto:rex.han@berkeley.edu"
              role="button"
            >
              <MDBIcon far icon="envelope" />
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter>
    </>
  );
}
