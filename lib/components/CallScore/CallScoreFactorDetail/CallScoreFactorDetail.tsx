import React from "react"
import "./callScoreFactorDetail.scss";
import FactorTitleAndScore from "../../../../src/components/CallScore/FactorTitleAndScore/FactorTitleAndScore";
import {getBorderColorStyles, QUESTIONS} from "../../../../src/components/CallScore/callScoreHelpers";
import {CallScoreFactorDetailsProps, defaultColors} from "../CallScore.types";
import {addClassName} from "../../../../src/components/helpers";

interface QuestionAnswerProps {
    question: string,
    answer: string,
    className: string,
    contentClassName?: string,
    customBorderColor?: string
}
const QuestionAnswer: React.FC<QuestionAnswerProps> = ({question, answer, className, contentClassName, customBorderColor}) => {
  return <div className={`symbl-call-score-question-answer ${className} ${addClassName(contentClassName)}`} style={getBorderColorStyles(customBorderColor)}>
      <p className={"symbl-question"}>{question}</p>
      <p className={"symbl-answer"}>{answer}</p>
  </div>
};

export const CallScoreFactorDetail: React.FC<CallScoreFactorDetailsProps> = ({title, score, feedback, classes, colors: colorsProps}: CallScoreFactorDetailsProps) => {
    const whatWorked = feedback?.positive?.summary;
    const whatDidNotWork = feedback?.negative?.summary;
    const howCouldItBeImproved = feedback?.how_could_it_be_improved;
    const totalScore = 100;
    const colors = !!colorsProps ? colorsProps : defaultColors;

return !!whatWorked || !!whatDidNotWork || !!howCouldItBeImproved ? <div className={`symbl-factor-details white-background-container ${addClassName(classes?.container)}`}>
        <FactorTitleAndScore title={title} actual={score} total={totalScore} classes={{factor: classes?.factorTitle}} colors={colors} />
        {
            whatWorked && <QuestionAnswer question={QUESTIONS.WHAT_WORKED} answer={whatWorked}
                                          customBorderColor={colors?.positiveBackgroundColor}
                                          className={"symbl-what-worked-well"} contentClassName={classes?.factorAnswer} />
        }
        {
            whatDidNotWork && <QuestionAnswer question={QUESTIONS.WHAT_DID_NOT_WORK} answer={whatDidNotWork}
                                              customBorderColor={colors?.negativeBackgroundColor}
                                              className={"symbl-what-did-not-work"} contentClassName={classes?.factorAnswer} />
        }
        {
            howCouldItBeImproved && <QuestionAnswer question={QUESTIONS.HOW_COULD_IT_BE_IMPROVED} answer={howCouldItBeImproved}
                                                    customBorderColor={colors?.neutralBackgroundColor}
                                                    className={"symbl-how-could-it-be-improved"} contentClassName={classes?.factorAnswer} />
        }
    </div>
        : <></>
}