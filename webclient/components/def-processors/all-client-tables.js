import allergiesClientTbl from '@/components/temporal/allergies/db/client-side/structure/allergies-of-a-patient-table.js'
import chiefComplaintClientTbl from '@/components/temporal/chief-complaint/db/client-side/structure/chief-complaint-of-a-patient-table.js'
import diagnosisClientTbl from '@/components/temporal/diagnosis/db/client-side/structure/diagnosis-of-a-patient-table.js'
import familyHistoryClientTbl from '@/components/temporal/family-history/db/client-side/structure/family-history-of-a-patient-table.js'
import mentalStatusExamOfAPatientTbl from '@/components/temporal/mental-status-exam/db/client-side/structure/mental-status-exam-of-a-patient-table.js'
import medicalReviewOfSystemOfAPatientTbl from '@/components/temporal/medical-review-of-system/db/client-side/structure/medical-review-of-system-of-a-patient-table.js'
import miscNotesClientTbl from '~/components/temporal/miscellaneous-notes/db/client-side/structure/miscellaneous-notes-of-a-patient-table.js'
import nameClientTbl from '~/components/temporal/name/db/client-side/structure/name-of-a-patient-table.js'
import pastPsychHistoryClientTbl from '~/components/temporal/past-psych-history/db/client-side/structure/past-psych-history-of-a-patient-table.js'
import planCommentsClientTbl from '@/components/temporal/plan-comments/db/client-side/structure/plan-comments-of-a-patient-table.js'
import processNotesClientTbl from '@/components/temporal/process-notes/db/client-side/structure/process-notes-of-a-patient-table.js'
import recommendationClientTbl from '@/components/temporal/recommendations/db/client-side/structure/recommendations-of-a-patient-table.js'
import reminderClientTbl from '@/components/temporal/reminders/db/client-side/structure/reminders-of-a-patient-table.js'
import goalsClientTbl from '@/components/temporal/goals/db/client-side/structure/goals-of-a-patient-table.js'
import screensClientTbl from '@/components/temporal/screens/db/client-side/structure/screens-of-a-patient-table.js'
import serviceStatementsOfAPatientTbl from '@/components/temporal/service-statements/db/client-side/structure/service-statements-of-a-patient-table.js'
import psychReviewOfSystemOfAPatientTbl from '@/components/temporal/psych-review-of-system/db/client-side/structure/psych-review-of-system-of-a-patient-table.js'
import phq9ClientTbl from '@/components/temporal/phq9/db/client-side/structure/phq9-of-a-patient-table.js'
/* the framework like add uses this object to find the correct vuex-orm-table to run the quries.
 For e.g. 
 Step 1:
 ------
 see: temporal/recommendations/db/client-side/structure/recommendations-of-a-patient-table.js
 On line 55 (approx) there is   
 > id: 'recommendations',

 Step 2:
 -------
 In temporal/1-/def-processors/change/add-form.vue
On line 164 there us: 
> import clientTbl from '../tables.js'

 Step 3:
 -------
 In temporal/1-/def-processors/change/add-form.vue
On line 195 there us: 
      return clientTbl[this.propFormDef.id].fnGetNewRowsInEditState()

    Hence 
    import recommendationClientTbl from '@/components/temporal/recommendations/db/client-side/structure/recommendations-of-a-patient-table.js'

    is used to run the line 30 described above.

*/
const allClientTbls = {
  allergies: allergiesClientTbl,
  chief_complaint: chiefComplaintClientTbl,
  diagnosis: diagnosisClientTbl,
  family_history: familyHistoryClientTbl,
  medical_review_of_system: medicalReviewOfSystemOfAPatientTbl,
  mental_status_exam: mentalStatusExamOfAPatientTbl,
  miscellaneous_notes: miscNotesClientTbl,
  name: nameClientTbl,
  past_psych_history: pastPsychHistoryClientTbl,
  plan_comments: planCommentsClientTbl,
  process_notes: processNotesClientTbl,
  recommendations: recommendationClientTbl,
  reminders: reminderClientTbl,
  service_statements: serviceStatementsOfAPatientTbl,
  psych_review_of_system: psychReviewOfSystemOfAPatientTbl,
  goals: goalsClientTbl,
  screens: screensClientTbl,
  phq9: phq9ClientTbl,
}

export default allClientTbls