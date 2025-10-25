'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye, 
  Download, 
  Trash2, 
  Mail, 
  Phone, 
  Calendar, 
  User, 
  FileText,
  Search,
  Filter,
  CheckCircle,
  Clock,
  X
} from "lucide-react";

interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
  resumeUrl: string;
  appliedDate: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  jobId: string;
  jobTitle: string;
}

export function JobApplications() {
  const [applications, setApplications] = useState<JobApplication[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+971 50 123 4567',
      position: 'Senior Frontend Developer',
      experience: '5-10 years',
      coverLetter: 'I am very interested in this position and have extensive experience in React and Next.js...',
      resumeUrl: '/resumes/john-smith-resume.pdf',
      appliedDate: '2024-01-15',
      status: 'pending',
      jobId: '1',
      jobTitle: 'Senior Frontend Developer'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+971 50 987 6543',
      position: 'UI/UX Designer',
      experience: '3-5 years',
      coverLetter: 'I have a strong background in user experience design and would love to contribute to your team...',
      resumeUrl: '/resumes/sarah-johnson-resume.pdf',
      appliedDate: '2024-01-14',
      status: 'reviewed',
      jobId: '2',
      jobTitle: 'UI/UX Designer'
    },
    {
      id: '3',
      name: 'Ahmed Al-Rashid',
      email: 'ahmed.rashid@email.com',
      phone: '+971 50 555 1234',
      position: 'Full Stack Developer',
      experience: '1-3 years',
      coverLetter: 'As a recent graduate with strong technical skills, I am excited about this opportunity...',
      resumeUrl: '/resumes/ahmed-rashid-resume.pdf',
      appliedDate: '2024-01-13',
      status: 'shortlisted',
      jobId: '3',
      jobTitle: 'Full Stack Developer'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-500/20 text-yellow-500', label: 'Pending' },
      reviewed: { color: 'bg-blue-500/20 text-blue-500', label: 'Reviewed' },
      shortlisted: { color: 'bg-green-500/20 text-green-500', label: 'Shortlisted' },
      rejected: { color: 'bg-red-500/20 text-red-500', label: 'Rejected' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return (
      <Badge className={`${config.color} border-0`}>
        {config.label}
      </Badge>
    );
  };

  const updateApplicationStatus = (id: string, status: JobApplication['status']) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, status } : app
    ));
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  const getStatusCounts = () => {
    return {
      total: applications.length,
      pending: applications.filter(app => app.status === 'pending').length,
      reviewed: applications.filter(app => app.status === 'reviewed').length,
      shortlisted: applications.filter(app => app.status === 'shortlisted').length,
      rejected: applications.filter(app => app.status === 'rejected').length
    };
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Job Applications</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-gray w-4 h-4" />
            <Input
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-primary-slate/50 border border-primary-slate/30 rounded-lg text-white"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-white">{statusCounts.total}</div>
            <div className="text-primary-gray text-sm">Total Applications</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-500">{statusCounts.pending}</div>
            <div className="text-primary-gray text-sm">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-500">{statusCounts.reviewed}</div>
            <div className="text-primary-gray text-sm">Reviewed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-500">{statusCounts.shortlisted}</div>
            <div className="text-primary-gray text-sm">Shortlisted</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-500">{statusCounts.rejected}</div>
            <div className="text-primary-gray text-sm">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
          <Card key={application.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{application.name}</h3>
                      <p className="text-primary-gray">{application.position}</p>
                      <p className="text-sm text-primary-gray">{application.appliedDate}</p>
                    </div>
                    {getStatusBadge(application.status)}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary-blue" />
                      <span className="text-primary-gray">{application.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary-blue" />
                      <span className="text-primary-gray">{application.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary-blue" />
                      <span className="text-primary-gray">{application.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-primary-blue" />
                      <a 
                        href={application.resumeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-blue hover:underline"
                      >
                        View Resume
                      </a>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Cover Letter:</h4>
                    <p className="text-primary-gray text-sm leading-relaxed">
                      {application.coverLetter.length > 200 
                        ? `${application.coverLetter.substring(0, 200)}...` 
                        : application.coverLetter
                      }
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-4">
                  <Button
                    size="sm"
                    onClick={() => setSelectedApplication(application)}
                    className="group"
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Details
                  </Button>
                  
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateApplicationStatus(application.id, 'reviewed')}
                      className="text-blue-500 hover:bg-blue-500/10"
                    >
                      <CheckCircle className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateApplicationStatus(application.id, 'shortlisted')}
                      className="text-green-500 hover:bg-green-500/10"
                    >
                      <Clock className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateApplicationStatus(application.id, 'rejected')}
                      className="text-red-500 hover:bg-red-500/10"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteApplication(application.id)}
                      className="text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Application Details</CardTitle>
                <Button
                  variant="outline"
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-primary-gray">Full Name</label>
                      <p className="text-white">{selectedApplication.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-primary-gray">Email</label>
                      <p className="text-white">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-primary-gray">Phone</label>
                      <p className="text-white">{selectedApplication.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm text-primary-gray">Experience Level</label>
                      <p className="text-white">{selectedApplication.experience}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Job Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-primary-gray">Position Applied For</label>
                      <p className="text-white">{selectedApplication.position}</p>
                    </div>
                    <div>
                      <label className="text-sm text-primary-gray">Application Date</label>
                      <p className="text-white">{selectedApplication.appliedDate}</p>
                    </div>
                    <div>
                      <label className="text-sm text-primary-gray">Status</label>
                      <div className="mt-1">
                        {getStatusBadge(selectedApplication.status)}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-primary-gray">Resume</label>
                      <div className="mt-1">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cover Letter</h3>
                <div className="bg-primary-slate/30 rounded-lg p-4">
                  <p className="text-primary-gray leading-relaxed whitespace-pre-wrap">
                    {selectedApplication.coverLetter}
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => updateApplicationStatus(selectedApplication.id, 'reviewed')}
                >
                  Mark as Reviewed
                </Button>
                <Button
                  onClick={() => updateApplicationStatus(selectedApplication.id, 'shortlisted')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Shortlist
                </Button>
                <Button
                  variant="outline"
                  onClick={() => updateApplicationStatus(selectedApplication.id, 'rejected')}
                  className="text-red-500 border-red-500 hover:bg-red-500/10"
                >
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
