import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  WhatsApp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f7f7f7",
    padding: theme.spacing(1),
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap:"wrap",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} bg-dark`}>
        <h2 className="text-center primary-text text-uppercase">Contact</h2>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <div className={classes.socialIcons}>
<div className="socialMedia" >
<Link href="https://www.facebook.com/" target="_blank">
              <FacebookIcon style={{color:"#1877F2"}} />
            </Link>
</div>
<div className="socialMedia">
<Link href="https://www.instagram.com/" target="_blank">
              <InstagramIcon style={{color:"#EE1D51"}} />
            </Link>
</div>
<div className="socialMedia">
<Link href="https://www.linkedin.com/" target="_blank">
              <LinkedInIcon style={{color:"#0A66C2"}} />
            </Link>
</div>
<div className="socialMedia">
<Link href="https://twitter.com/" target="_blank">
              <TwitterIcon style={{color:"#1DA1F2"}} />
            </Link>
</div>
<div className="socialMedia">
<Link href="https://twitter.com/" target="_blank">
              <WhatsApp style={{color:"#25D366"}} />
            </Link>
</div>
          
            
           
          </div>
        </Grid>
      </Grid>
      <div className="col-12 d-flex align-items-center justify-content-center">
      <p className="text-white text-center textContainer">©Swetasmita Ranjan Sahoo 2023. All Rights Reserved.

Feel free to customize this text by replacing "Swetasmita Ranjan Sahoo" with your own name or company name, and updating the 2023 to the current year.</p>
      </div>
      <style jsx>{`
      :global(.MuiSvgIcon-root){
        width:4rem;
        height:3rem;
        padding-top:2vh;
      }
      .socialMedia{
        height:4rem;
        width:4rem;
        background:black;
        border-radius:50%;
        box-shadow: 0px 3px 15px yellow;
      }
      .textContainer{
        width:66.66%;
      }
      @media only screen and (max-width: 767px) {
        :global(.MuiSvgIcon-root){
          width:2rem;
          height:1.5rem;
          padding-top:1vh;
        }
        .socialMedia{
          height:2rem;
          width:2rem;
          background:black;
          border-radius:50%;
          box-shadow: 0px 3px 15px yellow;
        }
        .textContainer{
          width:86.66%;
          padding-bottom:20vh;
        }
      }
      `}</style>
    </div>
  );
}
