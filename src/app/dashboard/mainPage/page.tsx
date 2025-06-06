"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import EventsTable from '@/components/EventsTable/EventsTable';
import styles from './page.module.scss';

export default function DashboardPage() {
    return (
        <div className={styles.dashboardLayout}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Header />
                <EventsTable />
            </main>
        </div>
    );
}