import React from "react"
import Layout from "../components/layout"
import { Box } from "@material-ui/core"
import sonsOfImDesign from "../img/sonsofim-design.png"

export default function SonsOfIm() {
  return (
    <Layout header1="Sons of Im Combat Design" hasBackButton>
      <Box textAlign="center" my={4}>
        <img
          src={sonsOfImDesign}
          alt="sons of im design"
          style={{ width: "100%", maxWidth: "612px", height: "auto" }}
        />
      </Box>
    </Layout>
  )
}
