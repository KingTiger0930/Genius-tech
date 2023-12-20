import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Bottom() {
  return (
    <Box backgroundColor='#262d4a' color='white' sx={{mt: 20}}>
      <Stack sx={{px: 10, mx: "auto", py: 12}}>
        <Typography variant="h3" component="h3" align="center" fontWeight={600}>Managed Private Cloud Computing Services.</Typography>
        <Typography variant="p" component="p" align="justify" sx={{mt: 12}}>Basically cloud computing services include a whole package of benefits for businesses and companies all over the world. It has different benefits when it comes to serving a company it provides servers, storage, database, software with a virtual form where a company can easily access every single service in no time. Cloud also features virtual storage which allows the users or the multinational companies to store unlimited data in their cloud database. The importance of cloud is equally important to that of a company which features managed private cloud computing services for a faster and proper usage of the cloud storage and other services.<br/><br/>Cloud storage has a lot more to offer in terms of providing services to users. But you do need a proper manager for the cloud computing services because you need to have a reliable manager for the services because it’s totally online and management of online services gets quite complicated sometimes which is why dealing with a brand like Genius Tech Inc. is always a good decision.</Typography>
      </Stack>
    </Box>
  );
}
