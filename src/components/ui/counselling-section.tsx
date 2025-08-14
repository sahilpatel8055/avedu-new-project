import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  UserCheck, 
  Clock, 
  Target, 
  Award,
  CheckCircle,
  Phone,
  Calendar,
  MessageCircle
} from "lucide-react";

const benefits = [
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Expert Career Counsellors",
    description: "Get guidance from certified education counsellors with 10+ years experience"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Personalized Recommendations", 
    description: "Receive course suggestions based on your background, budget and career goals"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "University Partnerships",
    description: "Access exclusive admissions and scholarships through our university tie-ups"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Get continuous support throughout your admission and course completion journey"
  }
];

const process = [
  {
    step: "1",
    title: "Book Free Session",
    description: "Schedule a 30-minute consultation with our expert counsellors"
  },
  {
    step: "2", 
    title: "Career Assessment",
    description: "Complete our detailed assessment to understand your goals and preferences"
  },
  {
    step: "3",
    title: "University Matching",
    description: "Get personalized university and course recommendations"
  },
  {
    step: "4",
    title: "Application Support",
    description: "Receive end-to-end support for admissions and enrollment"
  }
];

interface CounsellingSectionProps {
  onOpenCounseling?: () => void;
}

const CounsellingSection: React.FC<CounsellingSectionProps> = ({ onOpenCounseling }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background" id="counselling">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-success-light text-success mb-4">
            100% Free Counselling
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <strong>Expert Career Counselling for Your Success</strong>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't navigate your educational journey alone. Our certified counsellors help you 
            make informed decisions about your future with personalized guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Why Choose AVEDU Counselling?</h3>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary-light p-2 rounded-lg text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-success-light p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-success" />
                <h4 className="font-semibold">Success Guarantee</h4>
              </div>
              <p className="text-success-foreground mb-4">
                Over 50,000 students have successfully enrolled in their dream courses through our counselling.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-bold text-primary text-2xl">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="font-bold text-primary text-2xl">50K+</div>
                  <div className="text-sm">Students Guided</div>
                </div>
                <div>
                  <div className="font-bold text-primary text-2xl">100+</div>
                  <div className="text-sm">Universities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h4>
                <p className="mb-6 opacity-90">
                  Book your free counselling session today and take the first step towards your dream career.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Call
                  </Button>
                  <Button variant="secondary" size="sm" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Get Counselling
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingSection;