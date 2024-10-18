import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { Card, Form } from "react-bootstrap";

// Asegúrate de importar los estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const fullDataInstitution2 = {
  Primaria: {
    "1°": [
      { year: "2020-2021", reinscritos: 0, nuevos: 16, total: 16 },
      { year: "2021-2022", reinscritos: 0, nuevos: 21, total: 21 },
      { year: "2022-2023", reinscritos: 0, nuevos: 22, total: 22 },
      { year: "2023-2024", reinscritos: 0, nuevos: 16, total: 16 },
      { year: "2024-2025", reinscritos: 0, nuevos: 17, total: 17 },
    ],
    "2°": [
      { year: "2020-2021", reinscritos: 26, nuevos: 0, total: 26 },
      { year: "2021-2022", reinscritos: 8, nuevos: 9, total: 17 },
      { year: "2022-2023", reinscritos: 17, nuevos: 6, total: 23 },
      { year: "2023-2024", reinscritos: 17, nuevos: 1, total: 18 },
      { year: "2024-2025", reinscritos: 13, nuevos: 2, total: 15 },
    ],
    "3°": [
      { year: "2020-2021", reinscritos: 17, nuevos: 4, total: 21 },
      { year: "2021-2022", reinscritos: 16, nuevos: 3, total: 19 },
      { year: "2022-2023", reinscritos: 15, nuevos: 6, total: 21 },
      { year: "2023-2024", reinscritos: 21, nuevos: 2, total: 23 },
      { year: "2024-2025", reinscritos: 12, nuevos: 2, total: 14 },
    ],
    "4°": [
      { year: "2020-2021", reinscritos: 9, nuevos: 2, total: 11 },
      { year: "2021-2022", reinscritos: 15, nuevos: 5, total: 20 },
      { year: "2022-2023", reinscritos: 15, nuevos: 4, total: 19 },
      { year: "2023-2024", reinscritos: 18, nuevos: 3, total: 21 },
      { year: "2024-2025", reinscritos: 16, nuevos: 2, total: 18 },
    ],
    "5°": [
      { year: "2020-2021", reinscritos: 11, nuevos: 3, total: 14 },
      { year: "2021-2022", reinscritos: 11, nuevos: 2, total: 13 },
      { year: "2022-2023", reinscritos: 15, nuevos: 5, total: 20 },
      { year: "2023-2024", reinscritos: 15, nuevos: 8, total: 23 },
      { year: "2024-2025", reinscritos: 18, nuevos: 0, total: 18 },
    ],
    "6°": [
      { year: "2020-2021", reinscritos: 10, nuevos: 4, total: 14 },
      { year: "2021-2022", reinscritos: 9, nuevos: 4, total: 13 },
      { year: "2022-2023", reinscritos: 12, nuevos: 5, total: 17 },
      { year: "2023-2024", reinscritos: 16, nuevos: 3, total: 19 },
      { year: "2024-2025", reinscritos: 18, nuevos: 0, total: 18 },
    ],
  },
  Secundaria: {
    S1: [
      { year: "2020-2021", reinscritos: 8, nuevos: 18, total: 26 },
      { year: "2021-2022", reinscritos: 10, nuevos: 10, total: 20 },
      { year: "2022-2023", reinscritos: 7, nuevos: 18, total: 25 },
      { year: "2023-2024", reinscritos: 9, nuevos: 11, total: 20 },
      { year: "2024-2025", reinscritos: 10, nuevos: 11, total: 21 },
    ],
    S2: [
      { year: "2020-2021", reinscritos: 19, nuevos: 0, total: 19 },
      { year: "2021-2022", reinscritos: 19, nuevos: 3, total: 22 },
      { year: "2022-2023", reinscritos: 17, nuevos: 7, total: 24 },
      { year: "2023-2024", reinscritos: 18, nuevos: 6, total: 24 },
      { year: "2024-2025", reinscritos: 15, nuevos: 3, total: 18 },
    ],
    S3: [
      { year: "2020-2021", reinscritos: 6, nuevos: 2, total: 8 },
      { year: "2021-2022", reinscritos: 16, nuevos: 4, total: 20 },
      { year: "2022-2023", reinscritos: 21, nuevos: 3, total: 24 },
      { year: "2023-2024", reinscritos: 21, nuevos: 0, total: 21 },
      { year: "2024-2025", reinscritos: 18, nuevos: 0, total: 18 },
    ],
  },
  Bachillerato: {
    B1: [
      { year: "2020-2021", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2021-2022", reinscritos: 3, nuevos: 7, total: 10 },
      { year: "2022-2023", reinscritos: 11, nuevos: 11, total: 22 },
      { year: "2023-2024", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2024-2025", reinscritos: 7, nuevos: 12, total: 19 },
    ],
    B2: [
      { year: "2020-2021", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2021-2022", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2022-2023", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2023-2024", reinscritos: 8, nuevos: 5, total: 13 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
    B3: [
      { year: "2020-2021", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2021-2022", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2022-2023", reinscritos: 0, nuevos: 10, total: 10 },
      { year: "2023-2024", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2024-2025", reinscritos: 10, nuevos: 1, total: 11 },
    ],
    B4: [
      { year: "2020-2021", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2021-2022", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2022-2023", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2023-2024", reinscritos: 17, nuevos: 0, total: 17 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
    B5: [
      { year: "2020-2021", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2021-2022", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2022-2023", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2023-2024", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2024-2025", reinscritos: 15, nuevos: 0, total: 16 },
    ],
    B6: [
      { year: "2020-2021", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2021-2022", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2022-2023", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2023-2024", reinscritos: 0, nuevos: 10, total: 10 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
  },
};

const fullDataInstitution1 = {
  Secundaria: {
    S1: [
      { year: "2020-2021", reinscritos: 0, nuevos: 10, total: 10 },
      { year: "2021-2022", reinscritos: 0, nuevos: 10, total: 10 },
      { year: "2022-2023", reinscritos: 0, nuevos: 7, total: 7 },
      { year: "2023-2024", reinscritos: 0, nuevos: 15, total: 15 },
      { year: "2024-2025", reinscritos: 0, nuevos: 19, total: 19 },
    ],
    S2: [
      { year: "2020-2021", reinscritos: 8, nuevos: 0, total: 8 },
      { year: "2021-2022", reinscritos: 13, nuevos: 1, total: 14 },
      { year: "2022-2023", reinscritos: 13, nuevos: 0, total: 13 },
      { year: "2023-2024", reinscritos: 9, nuevos: 0, total: 9 },
      { year: "2024-2025", reinscritos: 14, nuevos: 0, total: 14 },
    ],
    S3: [
      { year: "2020-2021", reinscritos: 12, nuevos: 2, total: 14 },
      { year: "2021-2022", reinscritos: 9, nuevos: 0, total: 9 },
      { year: "2022-2023", reinscritos: 15, nuevos: 0, total: 15 },
      { year: "2023-2024", reinscritos: 12, nuevos: 1, total: 13 },
      { year: "2024-2025", reinscritos: 10, nuevos: 1, total: 11 },
    ],
  },
  Bachillerato: {
    B1: [
      { year: "2020-2021", reinscritos: 0, nuevos: 3, total: 3 },
      { year: "2021-2022", reinscritos: 4, nuevos: 2, total: 6 },
      { year: "2022-2023", reinscritos: 0, nuevos: 11, total: 11 },
      { year: "2023-2024", reinscritos: 0, nuevos: 10, total: 10 },
      { year: "2024-2025", reinscritos: 0, nuevos: 8, total: 8 },
    ],
    B2: [
      { year: "2020-2021", reinscritos: 8, nuevos: 0, total: 8 },
      { year: "2021-2022", reinscritos: 4, nuevos: 0, total: 4 },
      { year: "2022-2023", reinscritos: 9, nuevos: 2, total: 11 },
      { year: "2023-2024", reinscritos: 12, nuevos: 2, total: 14 },
      { year: "2024-2025", reinscritos: 9, nuevos: 1, total: 10 },
    ],
    B3: [
      { year: "2020-2021", reinscritos: 10, nuevos: 0, total: 10 },
      { year: "2021-2022", reinscritos: 11, nuevos: 0, total: 11 },
      { year: "2022-2023", reinscritos: 5, nuevos: 0, total: 5 },
      { year: "2023-2024", reinscritos: 8, nuevos: 0, total: 8 },
      { year: "2024-2025", reinscritos: 12, nuevos: 3, total: 15 },
    ],
  },
  "Bachillerato mixto": {
    BM1: [
      { year: "2020-2021", reinscritos: 17, nuevos: 2, total: 19 },
      { year: "2021-2022", reinscritos: 26, nuevos: 4, total: 30 },
      { year: "2022-2023", reinscritos: 19, nuevos: 2, total: 21 },
      { year: "2023-2024", reinscritos: 0, nuevos: 5, total: 5 },
      { year: "2024-2025", reinscritos: 0, nuevos: 15, total: 15 },
    ],
    BM2: [
      { year: "2020-2021", reinscritos: 15, nuevos: 0, total: 15 },
      { year: "2021-2022", reinscritos: 33, nuevos: 3, total: 36 },
      { year: "2022-2023", reinscritos: 38, nuevos: 6, total: 44 },
      { year: "2023-2024", reinscritos: 15, nuevos: 2, total: 17 },
      { year: "2024-2025", reinscritos: 7, nuevos: 0, total: 7 },
    ],
  },
  Licenciatura: {
    LAE: [
      { year: "2020-2021", reinscritos: 5, nuevos: 1, total: 6 },
      { year: "2021-2022", reinscritos: 1, nuevos: 0, total: 1 },
      { year: "2022-2023", reinscritos: 0, nuevos: 1, total: 1 },
      { year: "2023-2024", reinscritos: 1, nuevos: 0, total: 1 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
    LN: [
      { year: "2020-2021", reinscritos: 6, nuevos: 0, total: 6 },
      { year: "2021-2022", reinscritos: 6, nuevos: 1, total: 7 },
      { year: "2022-2023", reinscritos: 1, nuevos: 6, total: 7 },
      { year: "2023-2024", reinscritos: 6, nuevos: 4, total: 10 },
      { year: "2024-2025", reinscritos: 3, nuevos: 0, total: 3 },
    ],
    LED: [
      { year: "2020-2021", reinscritos: 10, nuevos: 3, total: 13 },
      { year: "2021-2022", reinscritos: 5, nuevos: 2, total: 7 },
      { year: "2022-2023", reinscritos: 4, nuevos: 2, total: 6 },
      { year: "2023-2024", reinscritos: 4, nuevos: 0, total: 4 },
      { year: "2024-2025", reinscritos: 2, nuevos: 0, total: 2 },
    ],
    LM: [
      { year: "2020-2021", reinscritos: 12, nuevos: 0, total: 12 },
      { year: "2021-2022", reinscritos: 3, nuevos: 0, total: 3 },
      { year: "2022-2023", reinscritos: 3, nuevos: 1, total: 4 },
      { year: "2023-2024", reinscritos: 1, nuevos: 0, total: 1 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
    LD: [
      { year: "2020-2021", reinscritos: 4, nuevos: 2, total: 6 },
      { year: "2021-2022", reinscritos: 4, nuevos: 2, total: 6 },
      { year: "2022-2023", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2023-2024", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
  },
  "Licenciatura sabatina": {
    LAES: [
      { year: "2020-2021", reinscritos: 6, nuevos: 0, total: 6 },
      { year: "2021-2022", reinscritos: 4, nuevos: 4, total: 8 },
      { year: "2022-2023", reinscritos: 3, nuevos: 0, total: 3 },
      { year: "2023-2024", reinscritos: 1, nuevos: 0, total: 1 },
      { year: "2024-2025", reinscritos: 3, nuevos: 4, total: 7 },
    ],
    LEDS: [
      { year: "2020-2021", reinscritos: 9, nuevos: 4, total: 13 },
      { year: "2021-2022", reinscritos: 10, nuevos: 2, total: 12 },
      { year: "2022-2023", reinscritos: 3, nuevos: 2, total: 5 },
      { year: "2023-2024", reinscritos: 2, nuevos: 2, total: 4 },
      { year: "2024-2025", reinscritos: 4, nuevos: 2, total: 6 },
    ],
    LDS: [
      { year: "2020-2021", reinscritos: 15, nuevos: 3, total: 18 },
      { year: "2021-2022", reinscritos: 9, nuevos: 1, total: 10 },
      { year: "2022-2023", reinscritos: 2, nuevos: 2, total: 4 },
      { year: "2023-2024", reinscritos: 2, nuevos: 0, total: 2 },
      { year: "2024-2025", reinscritos: 5, nuevos: 5, total: 10 },
    ],
  },
  Maestría: {
    MAESTRIA: [
      { year: "2020-2021", reinscritos: 5, nuevos: 4, total: 9 },
      { year: "2021-2022", reinscritos: 0, nuevos: 3, total: 3 },
      { year: "2022-2023", reinscritos: 0, nuevos: 2, total: 2 },
      { year: "2023-2024", reinscritos: 0, nuevos: 0, total: 0 },
      { year: "2024-2025", reinscritos: 0, nuevos: 0, total: 0 },
    ],
  },
};

// const projectedData = {
//   Secundaria: {
//     S1: [21, 23, 25, 27, 29],
//     S2: [0, 0, 0, 0, 0],
//     S3: [0, 0, 0, 0, 0],
//   },
//   Bachillerato: {
//     B1: [9, 10, 11, 12, 13],
//     B2: [2, 2, 2, 2, 2],
//     B3: [1, 2, 3, 4, 5],
//   },
//   "Bachillerato mixto": {
//     BM1: [12, 14, 16, 18, 20],
//     BM2: [1, 1, 1, 1, 1],
//   },
//   Licenciatura: {
//     LAE: [0, 0, 0, 0, 0],
//     LN: [2, 2, 2, 2, 2],
//     LED: [0, 0, 0, 0, 0],
//     LM: [0, 0, 0, 0, 0],
//     LD: [0, 0, 0, 0, 0],
//   },
//   "Licenciatura sabatina": {
//     LAES: [2, 2, 2, 2, 2],
//     LEDS: [1, 1, 1, 1, 1],
//     LDS: [2, 2, 2, 2, 2],
//   },
//   Maestría: {
//     MAESTRIA: [0, 0, 0, 0, 0],
//   },
// };

const years = [
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
  "2024-2025",
  "2025-2026",
  "2026-2027",
  "2027-2028",
  "2028-2029",
  "2029-2030",
];

const colors = [
  "#1f77b4", // azul
  "#ff7f0e", // naranja
  "#2ca02c", // verde
  "#d62728", // rojo
  "#9467bd", // morado
  "#8c564b", // marrón
];

// Función para calcular la regresión lineal
const calculateLinearRegression = (data) => {
  const n = data.length;
  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumX2 = 0;

  for (let i = 0; i < n; i++) {
    sumX += i;
    sumY += data[i].nuevos;
    sumXY += i * data[i].nuevos;
    sumX2 += i * i;
  }

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
};

// Función para calcular las proyecciones
const calculateProjections = (historicalData, yearsToProject = 5) => {
  const projections = {};

  Object.keys(historicalData).forEach((section) => {
    projections[section] = {};
    Object.keys(historicalData[section]).forEach((group) => {
      const data = historicalData[section][group];
      const { slope, intercept } = calculateLinearRegression(data);

      projections[section][group] = Array(yearsToProject)
        .fill()
        .map((_, i) => {
          const projectedValue = Math.round(
            slope * (data.length + i) + intercept
          );
          return Math.max(0, projectedValue); // Aseguramos que no haya valores negativos
        });
    });
  });

  return projections;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-white p-3 border border-gray-300 rounded shadow-lg">
        <p className="label font-weight-bold">{`Año: ${label}`}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            style={{ color: entry.color, margin: "0.25rem 0" }}
          >
            {`${entry.name}: Nuevos = ${entry.value}, Reinscritos = ${
              data[`${entry.name}Reinscritos`] || "N/A"
            }, Total = ${data[`${entry.name}Total`] || "N/A"}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// const Dashboard = () => {
//   const [selectedSection, setSelectedSection] = useState("Secundaria");
//   const [calculatedProjections, setCalculatedProjections] = useState({});

//   useEffect(() => {
//     const projections = calculateProjections(fullData);
//     setCalculatedProjections(projections);
//   }, []);

//   const formatData = () => {
//     return years.map((year, index) => {
//       const dataPoint = { name: year };
//       Object.keys(fullData[selectedSection]).forEach((group) => {
//         if (index < 5) {
//           const yearData = fullData[selectedSection][group][index];
//           dataPoint[group] = yearData.nuevos;
//           dataPoint[`${group}Reinscritos`] = yearData.reinscritos;
//           dataPoint[`${group}Total`] = yearData.total;
//         } else {
//           dataPoint[group] =
//             calculatedProjections[selectedSection]?.[group]?.[index - 5] || 0;
//         }
//       });
//       return dataPoint;
//     });
//   };

//   return (
//     <Card className="w-100 mx-auto" style={{ maxWidth: "1000px" }}>
//       {" "}
//       {/* Aumentado el ancho máximo */}
//       <Card.Header>
//         <h2 className="mb-0">Análisis de Inscripciones y Proyecciones</h2>
//       </Card.Header>
//       <Card.Body>
//         <Form.Group className="mb-4">
//           <Form.Label>Selecciona una sección</Form.Label>
//           <Form.Select
//             value={selectedSection}
//             onChange={(e) => setSelectedSection(e.target.value)}
//           >
//             {Object.keys(fullData).map((section) => (
//               <option key={section} value={section}>
//                 {section}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//         <ResponsiveContainer width="100%" height={500}>
//           {" "}
//           {/* Aumentado la altura */}
//           <LineChart
//             data={formatData()}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis
//               dataKey="name"
//               padding={{ left: 30, right: 30 }}
//               tick={{ fill: "#666", fontSize: 12 }}
//             />
//             <YAxis
//               tick={{ fill: "#666", fontSize: 12 }}
//               tickFormatter={(value) => value.toLocaleString()}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend wrapperStyle={{ paddingTop: "20px" }} />
//             {Object.keys(fullData[selectedSection]).map((group, index) => (
//               <Line
//                 key={group}
//                 type="monotone"
//                 dataKey={group}
//                 stroke={colors[index % colors.length]}
//                 strokeWidth={3} // Aumentado el grosor de la línea
//                 dot={{ r: 6, strokeWidth: 2 }} // Puntos más grandes
//                 activeDot={{ r: 8, strokeWidth: 2 }} // Puntos activos aún más grandes
//               />
//             ))}
//           </LineChart>
//         </ResponsiveContainer>
//       </Card.Body>
//     </Card>
//   );
// };

const Dashboard = () => {
  const [selectedInstitution, setSelectedInstitution] =
    useState("Institution1");
  const [selectedSection, setSelectedSection] = useState("Secundaria");
  const [calculatedProjections, setCalculatedProjections] = useState({});

  useEffect(() => {
    const fullData =
      selectedInstitution === "Institution1"
        ? fullDataInstitution1
        : fullDataInstitution2;
    const projections = calculateProjections(fullData);
    setCalculatedProjections(projections);
  }, [selectedInstitution]);

  //   const formatData = () => {
  //     const fullData =
  //       selectedInstitution === "Institution1"
  //         ? fullDataInstitution1
  //         : fullDataInstitution2;
  //     return years.map((year, index) => {
  //       const dataPoint = { name: year };
  //       Object.keys(fullData[selectedSection]).forEach((group) => {
  //         if (index < 5) {
  //           const yearData = fullData[selectedSection][group][index];
  //           if (yearData) {
  //             dataPoint[group] = yearData.nuevos;
  //             dataPoint[`${group}Reinscritos`] = yearData.reinscritos;
  //             dataPoint[`${group}Total`] = yearData.total;
  //           }
  //         } else {
  //           const projectedData =
  //             calculatedProjections[selectedSection]?.[group]?.[index - 5];
  //           if (projectedData) {
  //             dataPoint[group] = projectedData.nuevos;
  //             dataPoint[`${group}Reinscritos`] = projectedData.reinscritos;
  //             dataPoint[`${group}Total`] = projectedData.total;
  //           }
  //         }
  //       });
  //       return dataPoint;
  //     });
  //   };

  const formatData = () => {
    return years.map((year, index) => {
      const dataPoint = { name: year };
      Object.keys(fullData[selectedSection]).forEach((group) => {
        if (index < 5) {
          const yearData = fullData[selectedSection][group][index];
          dataPoint[group] = yearData.nuevos;
          dataPoint[`${group}Reinscritos`] = yearData.reinscritos;
          dataPoint[`${group}Total`] = yearData.total;
        } else {
          dataPoint[group] =
            calculatedProjections[selectedSection]?.[group]?.[index - 5] || 0;
        }
      });
      return dataPoint;
    });
  };

  const fullData =
    selectedInstitution === "Institution1"
      ? fullDataInstitution1
      : fullDataInstitution2;
  const projectionStartIndex = Math.min(
    ...Object.values(fullData).map((section) =>
      Math.min(...Object.values(section).map((group) => group.length))
    )
  );

  return (
    <Card className="w-100 mx-auto" style={{ maxWidth: "1000px" }}>
      <Card.Header>
        <h2 className="mb-0">
          Análisis de datos para proyecciones de los próximos 5 años de
          inscripciones de alumnos
        </h2>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <Form.Label>Selecciona una institución</Form.Label>
          <Form.Select
            value={selectedInstitution}
            onChange={(e) => {
              setSelectedInstitution(e.target.value);
              setSelectedSection(
                Object.keys(
                  e.target.value === "Institution1"
                    ? fullDataInstitution1
                    : fullDataInstitution2
                )[0]
              );
            }}
          >
            <option value="Institution1">IFAL Centro</option>
            <option value="Institution2">IFAL Itzícuaro</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Selecciona una sección</Form.Label>
          <Form.Select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            {Object.keys(fullData).map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={formatData()}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              padding={{ left: 30, right: 30 }}
              tick={{ fill: "#666", fontSize: 12 }}
            />
            <YAxis
              tick={{ fill: "#666", fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            {Object.keys(fullData[selectedSection]).map((group, index) => (
              <Line
                key={group}
                type="monotone"
                dataKey={group}
                stroke={colors[index % colors.length]}
                strokeWidth={3}
                dot={{ r: 6, strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            ))}
            <ReferenceLine
              x={years[projectionStartIndex - 1]}
              stroke="rgba(0, 0, 0, 0.5)"
              strokeDasharray="3 3"
              label={{
                value: "Inicio de Proyecciones",
                position: "insideTopRight",
                fill: "#666",
                fontSize: 12,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};
export default Dashboard;
