import { Router, Request, Response } from "express";
//@ts-ignore
import { FieldSubmission, Quiz, Field } from "../../models";
//@ts-ignore
import db from "../../models/index";

import {
  quizSubmissionSchema,
  quizSubmissionSchemaToPut,
} from "../../validations";
import { IQuizSubmission } from "../../types";

const router = Router();

// GET ALL FORM-SUBMISSIONS
router.get("/all", async (req: Request, res: Response) => {
  const submissions = await FieldSubmission.findAll({
    raw: true,
    include: [
      {
        model: Field,
        required: false,
        as: "fields",
        attributes: [],
      },
    ],
    attributes: ["studentId", [db.Sequelize.col("fields.form_id"), "formId"]],
    group: ['studentId', 'formId']
  });
  return res.json(submissions);
});

// GET QUIZ-SUBMISSIONS BY studentId
router.get("/:id", async (req: Request, res: Response) => {
  const submissions = await FieldSubmission.findAll({
    raw: true,
    include: [
      {
        model: Field,
        required: false,
        as: "fields",
        attributes: [],
      },
    ],
    attributes: [[db.Sequelize.col("fields.form_id"), "formId"]],
    group: ['formId'],
    where: {
      studentId: req.params.id
    }
  });
  return res.json(submissions);
});

// POST A NEW SUBMISSION
// router.post("/", async (req: Request, res: Response) => {
//   let body = req.body;
//   if (!body.answersSelected) {
//     return res
//       .status(403)
//       .json({message: "Failed to submit quiz, property 'answersSelected' is missing!"});
//   } else if(!body.userId) {
//     return res.status(403).json({message: "Failed to submit quiz, property 'userId' is missing!"});
//   } else if(!body.quizId) {
//     return res.status(403).json({message: "Failed to submit quiz, property 'quizId' is missing!"});
//   } else {
//     const submissionByThisUser = await FieldSubmission.findOne({
//       where: {
//         quizId: body.quizId,
//         userId: body.userId,
//       },
//     });
//     // "This user already submitted this quiz!"
//     if (submissionByThisUser) {
//       res.status(403).json({message: "Failed to submit quiz, user already submitted this quiz!"});
//     } else {
//       const answersSelected = body.answersSelected;
//       const quizId = body.quizId;
//       const userId = body.userId;
//       const correctAnswersArray = await (await Quiz.findByPk(quizId)).getQuestions({
//         attributes: ["id"],
//         include: [
//           {
//             model: Field,
//             attributes: ["id"],
//             where: {
//               isCorrect: true,
//             },
//           },
//         ],
//       });
//       const rank = calcRank(correctAnswersArray, answersSelected);
//       const newSubmission = await FieldSubmission.create({ userId, quizId, rank});
//       return (newSubmission) ? res.json(newSubmission) : res.status(404).json("failed to create submission")
//     }
//   }
//   // res.json(body)
// });
// router.post('/', async (req: Request, res: Response) => {
//   try {
//     let body: IQuizSubmission = req.body;
//     const newQuizSubmission: IQuizSubmission = {
//       quizId: body.quizId,
//       studentId: body.studentId,
//       rank: body.rank
//     }
//     const { error } = quizSubmissionSchema.validate(newQuizSubmission);
//     if(error) return res.status(400).json({ error: error.message });
//     const createdQuizSubmission: IQuizSubmission = await Quiz.create(req.body);
//     res.json(createdQuizSubmission);
//   }
//   catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
