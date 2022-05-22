import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function ListCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Chip
          color="primary"
          sx={{ marginRight: "1em" }}
          size="small"
          label="3 bhk"
        />
        <Chip color="secondary" size="small" label="3 sqft" />

        <Typography variant="h4" component="div" sx={{ marginTop: ".5em" }}>
          Snahea apt
        </Typography>

        <Typography variant="h6" component="div">
          rent: ₹12000
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deposite: ₹50000
        </Typography>

        <Typography sx={{ mb: 1.5 }}></Typography>

        <Typography variant="body2" color="text.secondary">
          Address, ad, dsada, a,adsad 402
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
