import { Paper, Title, Text, Group, List } from "@mantine/core";

export function PILPage() {
  return (
    <>
      <Paper sx={{ background: "transparent" }} p="md">
        <Group>
          <Title>What is a Public Interest Litigation (PIL)?</Title>
          <Text size="lg">{`Wikipedia defines PIL as use of litigation, or legal action, which seeks to advance the cause of a minority or disadvantaged groups or individuals, or which raises issues of broad public concern. It is a way of using the law strategically to effect social change.

In simple terms, a PIL is a petition that an individual or a non-government organisation or citizen groups, can file in the court seeking justice in an issue that has a larger public interest. It aims at giving common people an access to the judiciary to obtain legal redress for a greater cause.

PIL is not defined in any statute. It is the outcome of judicial activism to take cognisance of a cause at the instance of any person even if it does not affect him personally, but affects the public at large.`}</Text>
          <Title>Who can file it?</Title>
          <Text size="lg">{`Any Indian citizen can file a PIL, the only condition being that it should not be filed with a private interest, but in larger public interest. At times, even the Court can take cognizance of a matter if it is one of utmost public importance, and appoint an advocate to handle the case.`}</Text>
          <Title>How does one decide on filing a PIL?</Title>
          <Text size="lg">{`
          An advocate who has been filing PILs in Chennai High Court says it would be good to give a reasonable opportunity for the other party to respond to the issue that the individual or the group has raised, before filing the PIL.

          For example, if you have taken up a matter that demands government action or policy change, then first raise that issue with the authorities, bring it to their knowledge and ask them how are they going to solve it. Send them a representation in the first place.
          
          Give them some time – a month or two to reply. If they fail to respond or if you are unhappy with their response, then it’s the time to file a petition.`}</Text>
          <Group direction="column">
            <Title>Where can PILs be filed?</Title>
            <Text size="lg">{`PILs can be filed either in the High Court or in the Supreme Court.`}</Text>
          </Group>
          <Title>What is the procedure for filing a PIL?</Title>
          <Text size="lg">{`One has to do thorough research before filing a PIL. In case of filing a PIL concerning several individuals, it is important and the best course for the petitioner to consult all affected interest groups.

Once you decide to file a PIL, collect all relevant information and documents to back your case. You can argue in person or appoint an advocate to fight the case. In any case, it is advisable to consult an advocate before filing a PIL. If you intend to argue in person, be better prepared to explain the issue and convince the court in the little time that you are given.

Once you are ready with the PIL copy and intend to file it in the High Court, submit two copies of the petition to the court. Also, a copy of the petition has to be served to each respondent in advance. And this proof of serving the copy to the respondents has to be affixed in the petition.

If you are filing PIL in the Supreme Court, then five copies of the petition are to be filed before the court. Respondent is served with the copy only when the notice is issued from the court.`}</Text>
          <Title>What is the cost incurred to file a PIL?</Title>
          <Text size="lg">{`A PIL itself is cheap compared to other court cases. One has to pay a court fee of Rs 50 for each respondent and affix it with the petition. However, the expense for fighting the case depends on the advocate the petitioner chooses to argue the case.`}</Text>
          <Title>
            What is the difference between a PIL and a Writ Petition?
          </Title>
          <Text size="lg">{`Writs are filed by individuals or institutions for their own benefit and not for public interest, whereas PILs are filed for a larger good`}</Text>
          <Title>What are the issues that cannot be filed under PIL?</Title>
          <Text size="lg">{`The Supreme Court has issued a set of PIL guidelines according to which the following matters will not be allowed as PILs:`}</Text>
          <List size="lg">
            <List.Item>Landlord-tenant matters</List.Item>
            <List.Item>Service matters</List.Item>
            <List.Item>Matters pertaining to pension and gratuity</List.Item>
            <List.Item>
              Complaints against Central and State government departments and
              Local Bodies except those relating to items 1 to 10 mentioned in
              the list of guidelines
            </List.Item>
            <List.Item>
              Admission to medical and other educational institutions
            </List.Item>
            <List.Item>
              Petitions for early hearing of cases pending in High Court or
              subordinate courts
            </List.Item>
          </List>
          <Title>Do judges normally admit the PILs?</Title>
          <Text size="lg">{`It differs from judge to judge. PILs are handled by the Chief Justice of the court, hence it purely depends on how the sitting judge perceives the matter. The average admission rate may range from 30 to 60 per cent. Normally PILs are taken into consideration if the judges are convinced of the fact that the subject is of significance and is in the interest of the public.`}</Text>
          <Title>How long does it take for the closure of the case?</Title>
          <Text size="lg">{`That depends on the case. If the matter is of utmost importance pertaining to lives of individuals, human rights violation etc, the court would take up the case immediately, conduct the hearing and dispose of the matter. But in general, due to piling up of PILs in courts, the hearing and closure of the case is time consuming, often it takes years. However, in between the hearings, the court may issue directions to the authorities to perform certain actions as and when needed.

It’s only after the final hearing of both parties that a judgement is given.`}</Text>
          <Title>Are PILs often misused?</Title>
          <Text size="lg">{`It is interesting to know that the misuse or abuse of PILs is growing to be a serious concern in India, where the number of cases pending before the courts is already huge.

In 2010, the Supreme Court came down heavily on frivolous public interest litigation petitions for personal or extraneous reasons, and eventually laid down certain guidelines to be followed by courts in entertaining PILs.

The filing of indiscriminate petitions “creates unnecessary strain on the judicial system and consequently leads to inordinate delay in disposal of genuine and bona fide cases,” said a Bench consisting of Justices Dalveer Bhandari and Mukundakam Sharma.

Tracing the origin and development of PIL in various countries, Justice Bhandari, writing the judgment, said: “The courts’ contribution in helping the poorer sections by giving a new definition to life and liberty and in protecting ecology, environment and forests is extremely significant.” However, the Bench said, “unfortunately, of late, such an important jurisdiction, which has been carefully carved out, created and nurtured with great care and caution by the courts, is being blatantly abused by filing some petitions with oblique motives.”`}</Text>
        </Group>
      </Paper>
    </>
  );
}
