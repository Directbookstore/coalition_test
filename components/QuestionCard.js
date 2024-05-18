import Card from "./Card";

export default function QuestionCard(){
    return(
        <Card>
          <div className="flex gap-1 h-12 ">
            <div>
              <div className="w-12 rounded-full overflow-hidden py-2 ">
                <img src="/image/jenifa.png" alt="Jennifer Smith"  />
              </div>
            </div>
            <textarea className="grow text-sm h-8 my-2 rounded-full border border-lg px-2 " placeholder={"Ask question"} style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem', lineHeight: '1.5rem' }} />
          </div>
        </Card>
    )
}