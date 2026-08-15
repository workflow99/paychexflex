import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Tabs from '../components/Tabs.jsx'
import Tile from '../components/Tile.jsx'
import Row from '../components/Row.jsx'
import { employee } from '../data/mockData.js'
import PageSkeleton from '../components/SkeletonTile.jsx'

function EditButton() {
  return (
    <button className="float-right px-4 py-1.5 border border-app-border bg-app-card rounded text-[13px] cursor-pointer text-brand font-medium">
      Edit
    </button>
  )
}

function Personal() {
  return (
    <div>
      <Tile>
        <div className="flex justify-between items-center pb-3">
          <span className="font-semibold text-lg">Personal</span>
          <EditButton />
        </div>
        <div className="-mx-4 border-b border-app-border mb-4" />
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-[#9aa5b1]/35 text-[#6b7684] flex items-center justify-center text-xl font-bold">
            {employee.initials}
          </div>
          <div>
            <div className="font-semibold">Profile Image</div>
            <div className="text-brand text-sm">Update</div>
          </div>
        </div>
        <Row label="Legal name">
          {employee.legalFirstName}
          <br />
          {employee.legalLastName}
        </Row>
        <Row label="SSN">••• •• {employee.ssnLast4}</Row>
        <Row label="Birth date">{employee.birthDate}</Row>
        <Row label="Age">{employee.age}</Row>
        <Row label="Sex">{employee.sex}</Row>
        <Row label="Employee ID">{employee.employeeId}</Row>
        <Row label="Address">
          {employee.address.map((line, i) => (
            <span key={line}>
              {line}
              {i < employee.address.length - 1 && <br />}
            </span>
          ))}
        </Row>
        <Row label="Mobile Phone">{employee.mobilePhone}</Row>
        <Row label="Home Phone">{employee.homePhone}</Row>
        <Row label="Personal Email" last>
          {employee.personalEmail}
        </Row>
      </Tile>
      <Tile>
        <div className="font-semibold mb-2.5">Emergency contacts</div>
        {employee.emergencyContacts.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand text-white text-sm flex items-center justify-center">
              {c.initials}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{c.name}</div>
              <div className="text-[13px] text-app-muted mt-0.5">{c.relation}</div>
              <div className="text-[15px] mt-0.5">{c.phone}</div>
            </div>
          </div>
        ))}
        <div className="mt-3.5 text-brand text-sm">+ Add contact</div>
      </Tile>
    </div>
  )
}

function User() {
  return (
    <div>
      <div className="px-4 py-5">
        <EditButton />
        <Row label="Username">{employee.account.username}</Row>
        <Row label="Password">{employee.account.password}</Row>
        <Row label="User Phone (Primary)">{employee.account.userPhonePrimary}</Row>
        <Row label="User Phone (Secondary)">{employee.account.userPhoneSecondary}</Row>
        <Row label="User Email" last>
          {employee.account.userEmail}
        </Row>
      </div>
      <Tile>
        <div className="font-semibold mb-2.5">Security Questions</div>
        {employee.securityQuestions.map((q, i) => (
          <div
            key={q}
            className={`text-sm text-app-muted py-2 ${
              i < employee.securityQuestions.length - 1 ? 'border-b border-app-border' : ''
            }`}
          >
            {q}
          </div>
        ))}
        <div className="mt-3 text-[13px] text-app-muted">
          Receive a verification code by phone only when required (recommended)
        </div>
      </Tile>
      <Tile>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Voice Assistant</span>
          <EditButton />
        </div>
        <Row label="Voice PIN" last className="mt-2">
          {employee.account.voicePin}
        </Row>
      </Tile>
    </div>
  )
}

function Employment() {
  const { employment } = employee
  return (
    <div className="px-4 py-5">
      <EditButton />
      <div className="font-semibold mb-4">Summary</div>
      <Row label="Type">{employment.type}</Row>
      <Row label="Organization">{employment.organization}</Row>
      <Row label="Location">{employment.location}</Row>
      <Row label="Position">{employment.position}</Row>
      <Row label="Supervisor">{employment.supervisor}</Row>
      <Row label="Officer Type">{employment.officerType}</Row>
      <Row label="Hire Date">{employment.hireDate}</Row>
      <Row label="Seasonal Employee (ESR)" last>
        {employment.seasonal}
      </Row>
    </div>
  )
}

export default function Profile() {
  const [tab, setTab] = useState(0)
  const { pageLoading } = useOutletContext()
  const panels = [<Personal key="p" />, <User key="u" />, <Employment key="e" />]

  return (
    <div>
      <div className="text-[22px] font-semibold px-4 pt-5 pb-2">My Profile</div>
      <Tabs tabs={['Personal', 'User', 'Employment']} active={tab} onChange={setTab} />
      {pageLoading ? <PageSkeleton tiles={[{ lines: 4 }, { lines: 3 }, { lines: 2 }]} /> : panels[tab]}
    </div>
  )
}
