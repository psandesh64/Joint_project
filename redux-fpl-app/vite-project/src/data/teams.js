export const teams = [
    { name: "Arsenal", short_name: "ARS",badge:'t3.png',shirt:'shirt_3-66.webp'},
    { name: "Aston Villa", short_name: "AVL",badge:'t7.png',shirt:'shirt_7-66.webp' },
    { name: "Bournemouth", short_name: "BOU",badge:'t91.png',shirt:'shirt_91-66.webp' },
    { name: "Brentford", short_name: "BRE" ,badge:'t94.png',shirt:'shirt_94-66.webp'},
    { name: "Brighton", short_name: "BHA" ,badge:'t36.png',shirt:'shirt_36-66.webp'},
    { name: "Burnley", short_name: "BUR" ,badge:'t90.png',shirt:'shirt_90-66.webp'},
    { name: "Chelsea", short_name: "CHE" ,badge:'t8.png',shirt:'shirt_8-66.webp'},
    { name: "Crystal Palace", short_name: "CRY",badge:'t31.png',shirt:'shirt_31-66.webp' },
    { name: "Everton", short_name: "EVE" ,badge:'t11.png',shirt:'shirt_11-66.webp'},
    { name: "Fulham", short_name: "FUL" ,badge:'t54.png',shirt:'shirt_54-66.webp'},
    { name: "Liverpool", short_name: "LIV",badge:'t14.png',shirt:'shirt_14-66.webp' },
    { name: "Luton", short_name: "LUT" ,badge:'t102.png',shirt:'shirt_102-66.webp'},
    { name: "Man City", short_name: "MCI",badge:'t43.png',shirt:'shirt_43-66.webp' },
    { name: "Man Utd", short_name: "MUN" ,badge:'t1.png',shirt:'shirt_1-66.webp'},
    { name: "Newcastle", short_name: "NEW",badge:'t4.png',shirt:'shirt_4-66.webp' },
    { name: "Nott'm Forest", short_name: "NFO" ,badge:'t17.png',shirt:'shirt_17-66.webp'},
    { name: "Sheffield Utd", short_name: "SHU" ,badge:'t49.png',shirt:'shirt_49-66.webp'},
    { name: "Spurs", short_name: "TOT" ,badge:'t6.png',shirt:'shirt_6-66.webp'},
    { name: "West Ham", short_name: "WHU",badge:'t21.png',shirt:'shirt_21-66.webp' },
    { name: "Wolves", short_name: "WOL" ,badge:'t39.png',shirt:'shirt_39-66.webp'},
];

export const positions=['GKP','DEF','MID','FWD']


export const getTeamList = () => {
  const teamlist = [];
  for (let i = 0; i < teams.length; i++) {
    teamlist.push({ name: teams[i].name, short_name: teams[i].short_name });
  }
  return teamlist;
};
