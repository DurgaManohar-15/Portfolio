import {
  Box,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { motion } from "framer-motion";

// Certificate images

import microsoftai from "../assets/certificates/Microsoft_Ai_workshop.png";
import infosysjava from "../assets/certificates/infosys_java.png";
import infosysdsa from "../assets/certificates/infosys_dsa.png";
import hpaibeginners from "../assets/certificates/hp_ai_for_beginners.png";
import genai from "../assets/certificates/gen_ai_simplylearn.png";
import deldataanl from "../assets/certificates/deloitte_data_analytics_for_job_stimulation.png";
import deljob from "../assets/certificates/deloitte_tech_job_stimulation.png";


// Certificate PDFs

import microsoftaiPdf from "../assets/certificates/Microsoft_Ai_workshop.pdf";
import infosysjavaPdf from "../assets/certificates/infosys java.pdf";
import infosysdsaPdf from "../assets/certificates/infosys DSA.pdf";
import hpaibeginnerspdf from "../assets/certificates/hp_ai_for_beginners.pdf";
import genaipdf from "../assets/certificates/generativeAi.pdf";
import deldataanlpdf from "../assets/certificates/data analysis.pdf";
import deljobpdf from "../assets/certificates/Deloitte.pdf";


// import githubFundamentalsPdf from "../assets/certificates/GitHub fundamentals - Administration basics and product features Part 1 of 2.pdf";

const certifications = [

  {
    title: "Microsoft AI workshop",
    organization: "Microsoft",
    issue_date: "July 2025",
    image: microsoftai,
    file: microsoftaiPdf,
  },
  {
    title:
      "Infosys -  Programming using Java",
    organization: "Infosys",
    issue_date: "July 2025",
    image: infosysjava,
    file: infosysjavaPdf,
  },
   {
    title:
      "Infosys -  DSA using Java",
    organization: "Infosys",
    issue_date: "July 2025",
    image: infosysdsa,
    file: infosysdsaPdf,
  },
     {
    title:
      "HP -  AI for Beginners",
    organization: "HP",
    issue_date: "June 2025",
    image: hpaibeginners,
    file: hpaibeginnerspdf,
  },
       {
    title:
      "SimplyLearn -  Gen-AI for Beginners",
    organization: "SimplyLearn",
    issue_date: "June 2025",
    image: genai,
    file: genaipdf,
  },
{
    title:
      "Deloitte -   Technology	Job	Simulation",
    organization: "Deloitte",
    issue_date: "June 2025",
    image: deljob,
    file: deljobpdf,
  },
  {
    title:
      "Deloitte -    Data	Analytics	Job	Simulation",
    organization: "Deloitte",
    issue_date: "June 2025",
    image: deldataanl,
    file: deldataanlpdf,
  },
    {
    title:
      "CS50’s Introduction to Databases with SQL! ",
    organization: "Harward University",
    issue_date: "Oct 2025",
    image: deldataanl,
    file: deldataanlpdf,
  },
];

// Helper to sort by date descending (YYYY/MM or Month YYYY)
const parseDate = (dateStr) => {
  // Try to parse as 'Month YYYY'
  const [month, year] = dateStr.split(" ");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIdx = months.findIndex((m) => m === month);
  return year
    ? new Date(parseInt(year), monthIdx === -1 ? 0 : monthIdx)
    : new Date(dateStr);
};

const sortedCerts = certifications
  .slice()
  .sort((a, b) => parseDate(b.issue_date) - parseDate(a.issue_date));

const Certifications = () => {
  return (
    <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, my: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Certifications
        </Typography>
      </motion.div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          mt: 4,
        }}
      >
        {sortedCerts.map((cert, idx) => (
          <motion.div
            key={cert.title + idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
            style={{ width: "100%" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "stretch",
                p: { xs: 0.5, sm: 1.5 },
                boxShadow: 4,
                mb: { xs: 2, sm: 0 },
                minWidth: 0,
                width: { xs: "100%", sm: "96%", md: "92%", lg: "88%" },
                maxWidth: { xs: "100%", sm: "100%", md: 1100, lg: 1300 },
                mx: "auto",
                background: (theme) =>
                  theme.palette.mode === "dark" ? "#232b3b" : "#f8fafc",
                borderRadius: 8,
                border: (theme) =>
                  `1.5px solid ${
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.main
                      : "#e0e7ef"
                  }`,
                gap: { xs: 0, sm: 0 },
              }}
            >
              {/* Image on the left or top */}
              <Box
                sx={{
                  flex: { xs: "unset", sm: "0 0 340px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 0,
                  p: { xs: 1, sm: 2 },
                  background: "#fff",
                  borderRadius: { xs: 6, sm: "8px 0 0 8px" },
                  borderRight: {
                    xs: "none",
                    sm: (theme) =>
                      `1.5px solid ${
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.main
                          : "#e0e7ef"
                      }`,
                  },
                  mb: { xs: 0, sm: 0 },
                }}
              >
                <Box
                  component="img"
                  src={cert.image}
                  alt={cert.title}
                  sx={{
                    width: { xs: "100%", sm: 300, md: 320 },
                    height: { xs: 120, sm: 180, md: 220 },
                    objectFit: "contain",
                    borderRadius: 4,
                    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
                    background: "#fff",
                  }}
                />
              </Box>
              {/* Text and button on the right or below */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", sm: "flex-start" },
                  px: { xs: 1, sm: 3 },
                  py: { xs: 1.5, sm: 2 },
                  gap: 1.5,
                  minWidth: 0,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  gutterBottom
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  {cert.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  {cert.organization}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, textAlign: { xs: "center", sm: "left" } }}
                >
                  Issued: {cert.issue_date}
                </Typography>
                <Box
                  sx={{ mt: 2, alignSelf: { xs: "center", sm: "flex-start" } }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    href={cert.file}
                    target="_blank"
                    startIcon={<PictureAsPdfIcon />}
                    sx={{ mb: 1, minWidth: 120 }}
                  >
                    View PDF
                  </Button>
                </Box>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Paper>
  );
};

export default Certifications;
