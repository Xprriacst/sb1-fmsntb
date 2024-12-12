import React from 'react';
import { MessageSquare, Users, Clock, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      id: 1,
      name: 'Total Messages',
      value: '156',
      icon: MessageSquare,
      change: '+12%',
      changeType: 'increase',
    },
    {
      id: 2,
      name: 'Active Conversations',
      value: '23',
      icon: Users,
      change: '+4%',
      changeType: 'increase',
    },
    {
      id: 3,
      name: 'Response Time',
      value: '4.2s',
      icon: Clock,
      change: '-0.3s',
      changeType: 'decrease',
    },
    {
      id: 4,
      name: 'Pending Reviews',
      value: '5',
      icon: AlertTriangle,
      change: '+2',
      changeType: 'increase',
    },
  ];

  const recentMessages = [
    {
      id: 1,
      platform: 'Airbnb',
      guest: 'Sophie Martin',
      message: 'What time is check-in?',
      time: '5 min ago',
      status: 'automated',
    },
    {
      id: 2,
      platform: 'Booking',
      guest: 'John Smith',
      message: 'Is parking available?',
      time: '15 min ago',
      status: 'automated',
    },
    {
      id: 3,
      platform: 'Airbnb',
      guest: 'Marie Dubois',
      message: 'Can we bring our dog?',
      time: '1 hour ago',
      status: 'manual',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-full">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-gray-600"> vs last week</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Messages
          </h2>
          <div className="divide-y divide-gray-200">
            {recentMessages.map((message) => (
              <div key={message.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-full ${
                      message.platform === 'Airbnb' ? 'bg-rose-50' : 'bg-blue-50'
                    }`}>
                      <MessageSquare className={`h-5 w-5 ${
                        message.platform === 'Airbnb' ? 'text-rose-600' : 'text-blue-600'
                      }`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {message.guest}
                    </p>
                    <p className="text-sm text-gray-600">{message.message}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{message.time}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      message.status === 'automated'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    {message.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}