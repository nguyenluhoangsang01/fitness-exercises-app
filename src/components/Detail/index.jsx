import React from "react";
import BodyPartIcon from "../../assets/icons/body-part.png";
import TargetIcon from "../../assets/icons/target.png";
import EquipmentIcon from "../../assets/icons/equipment.png";
import { Stack, Typography, Button } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { gifUrl, name, target, bodyPart, equipment } = exerciseDetail;

  const EXTRA_DETAIL = [
    {
      icon: BodyPartIcon,
      name: bodyPart,
      key: "bodyPart",
    },
    {
      icon: TargetIcon,
      name: target,
      key: "target",
    },
    {
      icon: EquipmentIcon,
      name: equipment,
      key: "equipment",
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: {
          lg: "row",
        },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: {
            lg: "35px",
            xs: "20px",
          },
        }}
      >
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="subtitle1">
          Exercises keep you strong.{" "}
          <span
            style={{
              textTransform: "capitalize",
            }}
          >
            {" "}
            {name}
          </span>{" "}
          is one of the best exercises to target your {target}. It will help you
          improve your mod and gain energy.
        </Typography>

        {EXTRA_DETAIL.map((item) => (
          <Stack key={item.key} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={item.name} loading="lazy" />
            </Button>
            <Typography variant="subtitle1" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
