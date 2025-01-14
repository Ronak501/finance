import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function InvestmentFlowchart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Card className="w-full max-w-4xl mb-4">
        <CardHeader>
          <CardTitle>External Contributors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Investors</p>
              <p>Provide: Capital Contribution</p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}