const db = {
    employees: [
        { id: 'EMP-001', name: 'Carlos Mendoza García', dept: 'Ventas Corporativas', salary: 8700, account: '40020812345670', email: 'c.mendoza@segurosbo.com' },
        { id: 'EMP-002', name: 'María Fernández López', dept: 'Siniestros', salary: 9200, account: '40020812345681', email: 'm.fernandez@segurosbo.com' },
        { id: 'EMP-003', name: 'Juan Pérez Mamani', dept: 'Cobranzas', salary: 11000, account: '40020812345692', email: 'j.perez@segurosbo.com' },
        { id: 'EMP-004', name: 'Ana Quispe Torrez', dept: 'Administración', salary: 12500, account: '40020812345703', email: 'a.quispe@segurosbo.com' },
        { id: 'EMP-005', name: 'Roberto Choque Vargas', dept: 'TI', salary: 14500, account: '40020812345714', email: 'r.choque@segurosbo.com' },
        { id: 'EMP-006', name: 'Patricia Morales Ríos', dept: 'RRHH', salary: 13200, account: '40020812345725', email: 'p.morales@segurosbo.com' },
        { id: 'EMP-007', name: 'Diego Aramayo Salinas', dept: 'Actuaría', salary: 11800, account: '40020812345736', email: 'd.aramayo@segurosbo.com' },
        { id: 'EMP-008', name: 'Verónica Rojas Céspedes', dept: 'Marketing', salary: 9800, account: '40020812345747', email: 'v.rojas@segurosbo.com' },
        { id: 'EMP-009', name: 'Sofía Gutiérrez Leaño', dept: 'Operaciones', salary: 10400, account: '40020812345758', email: 's.gutierrez@segurosbo.com' },
        { id: 'EMP-010', name: 'Hernán Villca Padilla', dept: 'Auditoría', salary: 12350, account: '40020812345769', email: 'h.villca@segurosbo.com' },
        { id: 'EMP-011', name: 'Cecilia Calderón Daza', dept: 'Legal', salary: 10150, account: '40020812345770', email: 'c.calderon@segurosbo.com' },
        { id: 'EMP-012', name: 'Marco Antelo Suárez', dept: 'Banca Empresas', salary: 13950, account: '40020812345781', email: 'm.antelo@segurosbo.com' }
    ],
    transactions: [
        { type: 'out', desc: 'Pago nómina octubre 2025', date: '2025-10-31', amount: 186400, status: 'Completado', ref: 'PRL-2025-10' },
        { type: 'in', desc: 'Recaudación pólizas vida', date: '2025-10-30', amount: 214500, status: 'Completado', ref: 'RCV-1025' },
        { type: 'out', desc: 'Pago Clínica San Gabriel', date: '2025-10-29', amount: 48250, status: 'Completado', ref: 'FAC-12489' },
        { type: 'out', desc: 'Pago Taller Automotriz Central', date: '2025-10-29', amount: 31200, status: 'Pendiente', ref: 'FAC-12490' },
        { type: 'in', desc: 'Depósito cliente POL-2025-087', date: '2025-10-28', amount: 8450, status: 'Completado', ref: 'POL-2025-087' },
        { type: 'out', desc: 'Reembolso siniestro vehículo', date: '2025-10-28', amount: 15800, status: 'Completado', ref: 'SIN-4521' },
        { type: 'out', desc: 'Pago Constructora Andes', date: '2025-10-27', amount: 72600, status: 'Completado', ref: 'FAC-12475' },
        { type: 'in', desc: 'Recaudación pólizas salud', date: '2025-10-27', amount: 96800, status: 'Completado', ref: 'RC-PS-337' },
        { type: 'out', desc: 'Pago Farmacia Nacional', date: '2025-10-26', amount: 12350, status: 'Completado', ref: 'FAC-12460' },
        { type: 'out', desc: 'Pago prima reaseguro', date: '2025-10-25', amount: 210000, status: 'Completado', ref: 'REA-2025-10' },
        { type: 'in', desc: 'Cobro coaseguro', date: '2025-10-25', amount: 56500, status: 'Completado', ref: 'COA-447' },
        { type: 'out', desc: 'Pago transporte asistencia', date: '2025-10-24', amount: 5400, status: 'Completado', ref: 'AST-2201' },
        { type: 'in', desc: 'Depósito cliente POL-2025-079', date: '2025-10-24', amount: 7200, status: 'Completado', ref: 'POL-2025-079' },
        { type: 'out', desc: 'Pago servicios nube', date: '2025-10-24', amount: 8300, status: 'Completado', ref: 'TI-1945' }
    ],
    providers: [
        { name: 'Clínica San Gabriel S.A.', service: 'Servicios médicos', bank: 'BNB', ruc: '1023456789012', contact: 'pagos@csg.com.bo', account: '10001234123456' },
        { name: 'Taller Automotriz Central', service: 'Reparación vehicular', bank: 'BISA', ruc: '1034567890123', contact: 'contabilidad@tallercentral.com', account: '10004567234567' },
        { name: 'Constructora Andes Ltda.', service: 'Obras civiles', bank: 'BCP', ruc: '1045678901234', contact: 'finanzas@andes.com', account: '10007890098765' },
        { name: 'Farmacia Nacional S.A.', service: 'Medicamentos', bank: 'BancoSol', ruc: '1056789012345', contact: 'cobros@farmanac.com', account: '10002345987654' },
        { name: 'Seguridad Cóndor SRL', service: 'Seguridad física', bank: 'Mercantil SCZ', ruc: '1067890123456', contact: 'tesoreria@condor.com', account: '10008976543210' },
        { name: 'ServiNube Bolivia', service: 'Servicios cloud', bank: 'BCP', ruc: '1078901234567', contact: 'billing@servinube.bo', account: '10003456712345' },
        { name: 'Transportes Altiplano', service: 'Logística y envíos', bank: 'BNB', ruc: '1089012345678', contact: 'pagos@altiplano.com', account: '10007890123450' },
        { name: 'SIS Clínica Norte', service: 'Clínica afiliada', bank: 'Union', ruc: '1090123456789', contact: 'cobros@clinicanorte.com', account: '10006789432109' }
    ],
    notifications: [
        { id: 1, title: 'Pago masivo listo para firmar', detail: 'Nómina noviembre 2025 por Bs 192,800', time: 'Hace 8 min', type: 'pago', read: false },
        { id: 2, title: 'Alerta de seguridad', detail: 'Intento de login bloqueado desde IP 190.120.10.2', time: 'Hace 15 min', type: 'seguridad', read: false },
        { id: 3, title: 'Proveedor observado', detail: 'Constructora Andes envió RUE actualizado', time: 'Hace 22 min', type: 'proveedor', read: false },
        { id: 4, title: 'Transferencia conciliada', detail: 'Pago Clínica San Gabriel Bs 48,250', time: 'Hace 1 h', type: 'pago', read: true },
        { id: 5, title: 'Depósito identificado', detail: 'Póliza vida corporativa Bs 214,500', time: 'Hace 2 h', type: 'recaudacion', read: true },
        { id: 6, title: 'Nuevo empleado creado', detail: 'Marco Antelo Suárez - Banca Empresas', time: 'Hace 3 h', type: 'empleados', read: true },
        { id: 7, title: 'Validación pendiente', detail: 'Cuenta 40020812345736 requiere reintento', time: 'Hace 4 h', type: 'validacion', read: false },
        { id: 8, title: 'Actualización de límites', detail: 'Límite diario de transferencias subió a Bs 500,000', time: 'Hace 6 h', type: 'config', read: true }
    ],
    logs: [
        { action: 'Login exitoso', user: 'admin@segurosbo.com', time: '2025-10-31 08:05', status: 'Exitoso' },
        { action: 'Pago masivo autorizado', user: 'jefe.tesoreria@segurosbo.com', time: '2025-10-31 07:50', status: 'Exitoso' },
        { action: 'Intento de acceso fallido', user: 'soporte@test.com', time: '2025-10-31 07:42', status: 'Alerta' },
        { action: 'Validación de cuenta', user: 'analista.pagos@segurosbo.com', time: '2025-10-31 07:21', status: 'Exitoso' },
        { action: 'Actualización de límites', user: 'admin@segurosbo.com', time: '2025-10-31 06:55', status: 'Exitoso' },
        { action: 'Descarga de reporte masivo', user: 'auditor@segurosbo.com', time: '2025-10-31 06:40', status: 'Exitoso' }
    ],
    validations: [
        { account: '40020812345670', holder: 'Carlos Mendoza García', bank: 'BCP', status: 'Validada', updated: '2025-10-31' },
        { account: '40020812345714', holder: 'Roberto Choque Vargas', bank: 'BCP', status: 'Validada', updated: '2025-10-31' },
        { account: '40020812345736', holder: 'Diego Aramayo Salinas', bank: 'BCP', status: 'Observada', updated: '2025-10-30' },
        { account: '40020812345781', holder: 'Marco Antelo Suárez', bank: 'BCP', status: 'En proceso', updated: '2025-10-30' },
        { account: '40020812345692', holder: 'Juan Pérez Mamani', bank: 'BCP', status: 'Validada', updated: '2025-10-29' }
    ]
};

const formatCurrency = (value) => value.toLocaleString('es-BO', { style: 'currency', currency: 'BOB', minimumFractionDigits: 2 });
const formatDate = (value) => new Date(value).toLocaleDateString('es-BO', { day: '2-digit', month: 'short', year: 'numeric' });

const setActiveNav = () => {
    const current = window.PAGE || 'dashboard';
    document.querySelectorAll('[data-nav]').forEach((link) => {
        const isActive = link.dataset.nav === current;
        link.classList.toggle('active', isActive);
    });
};

const renderHeaderCounts = () => {
    const unread = db.notifications.filter((n) => !n.read).length;
    document.querySelectorAll('[data-badge-notifications]').forEach((el) => {
        if (unread > 0) {
            el.textContent = unread;
            el.hidden = false;
        } else {
            el.hidden = true;
        }
    });
    document.querySelectorAll('[data-emp-count]').forEach((el) => {
        el.textContent = db.employees.length;
    });
};

const renderDashboard = () => {
    const ingresos = db.transactions.filter((t) => t.type === 'in').reduce((acc, t) => acc + t.amount, 0);
    const egresos = db.transactions.filter((t) => t.type === 'out').reduce((acc, t) => acc + t.amount, 0);
    const saldo = ingresos - egresos;

    const ingresosEl = document.getElementById('dashboard-ingresos');
    const egresosEl = document.getElementById('dashboard-egresos');
    const saldoEl = document.getElementById('dashboard-saldo');
    const empleadosEl = document.getElementById('dashboard-empleados');
    const validacionesEl = document.getElementById('dashboard-validaciones');

    if (ingresosEl) ingresosEl.textContent = formatCurrency(ingresos);
    if (egresosEl) egresosEl.textContent = formatCurrency(egresos);
    if (saldoEl) saldoEl.textContent = formatCurrency(saldo);
    if (empleadosEl) empleadosEl.textContent = db.employees.length.toString();
    if (validacionesEl) validacionesEl.textContent = db.validations.length.toString();

    const table = document.getElementById('dashboard-tx-table');
    if (!table) return;
    const rows = db.transactions.slice(0, 10).map((tx) => {
        const badgeClass = tx.status === 'Completado' ? 'success' : 'warning';
        const sign = tx.type === 'in' ? '+' : '-';
        return `
            <tr>
                <td><div style="font-weight:600">${tx.desc}</div><div class="meta">Ref: ${tx.ref}</div></td>
                <td>${formatDate(tx.date)}</td>
                <td style="color:${tx.type === 'in' ? 'var(--success)' : 'var(--danger)'}">${sign}${formatCurrency(tx.amount)}</td>
                <td><span class="chip ${badgeClass}">${tx.status}</span></td>
            </tr>
        `;
    }).join('');
    table.innerHTML = `
        <table class="table">
            <thead><tr><th>Movimiento</th><th>Fecha</th><th>Monto</th><th>Estado</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
};

const renderEmployees = () => {
    let totalPayroll = db.employees.reduce((acc, emp) => acc + emp.salary, 0);
    const average = db.employees.length ? totalPayroll / db.employees.length : 0;

    const list = document.getElementById('employees-list');
    if (list) {
        list.innerHTML = db.employees.map((emp) => `
            <div class="list-item">
                <div class="icon"><span class="material-icons-outlined">badge</span></div>
                <div style="flex:1;">
                    <div style="font-weight:600">${emp.name}</div>
                    <div class="meta">${emp.id} • ${emp.dept} • ${emp.email}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:700">${formatCurrency(emp.salary)}</div>
                    <div class="meta">${emp.account}</div>
                </div>
            </div>
        `).join('');
    }

    const totalEl = document.getElementById('employees-total');
    const payrollEl = document.getElementById('payroll-total');
    const avgEl = document.getElementById('employees-average');
    if (totalEl) totalEl.textContent = db.employees.length.toString();
    if (payrollEl) payrollEl.textContent = formatCurrency(totalPayroll);
    if (avgEl) avgEl.textContent = formatCurrency(average);
};

const renderPayroll = () => {
    const container = document.getElementById('payroll-list');
    if (!container) return;
    container.innerHTML = db.employees.map((emp) => `
        <div class="list-item" style="justify-content:space-between;">
            <div class="checkbox-row">
                <input type="checkbox" aria-label="Seleccionar ${emp.name}">
                <div>
                    <div style="font-weight:600">${emp.name}</div>
                    <div class="meta">${emp.id} • ${emp.dept}</div>
                </div>
            </div>
            <div style="font-weight:700">${formatCurrency(emp.salary)}</div>
        </div>
    `).join('');
};

const renderTransfers = () => {
    const container = document.getElementById('recent-transfers');
    if (!container) return;
    const rows = db.transactions.filter((t) => t.type === 'out').slice(0, 8).map((tx) => `
        <tr>
            <td>${tx.desc}<div class="meta">${tx.ref}</div></td>
            <td>${formatDate(tx.date)}</td>
            <td>${formatCurrency(tx.amount)}</td>
            <td><span class="chip ${tx.status === 'Completado' ? 'success' : 'warning'}">${tx.status}</span></td>
        </tr>
    `).join('');
    container.innerHTML = `
        <table class="table">
            <thead><tr><th>Detalle</th><th>Fecha</th><th>Monto</th><th>Estado</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
};

const renderProviders = () => {
    const container = document.getElementById('providers-list');
    if (!container) return;
    container.innerHTML = db.providers.map((prov) => `
        <div class="list-item">
            <div class="icon"><span class="material-icons-outlined">business</span></div>
            <div style="flex:1;">
                <div style="font-weight:600">${prov.name}</div>
                <div class="meta">${prov.service} • ${prov.ruc} • ${prov.contact}</div>
            </div>
            <div style="text-align:right;">
                <div style="font-weight:700">${prov.bank}</div>
                <div class="meta">${prov.account}</div>
            </div>
        </div>
    `).join('');
};

const renderSecurity = () => {
    const container = document.getElementById('security-logs');
    if (!container) return;
    container.innerHTML = db.logs.map((log) => {
        const isAlert = log.status === 'Alerta';
        return `
            <div class="list-item">
                <div class="icon" style="background:${isAlert ? 'rgba(245, 158, 11, 0.18)' : 'rgba(16, 185, 129, 0.16)'}; color:${isAlert ? 'var(--warning)' : 'var(--success)'}">
                    <span class="material-icons-outlined">${isAlert ? 'warning' : 'check_circle'}</span>
                </div>
                <div style="flex:1;">
                    <div style="font-weight:600">${log.action}</div>
                    <div class="meta">${log.user}</div>
                </div>
                <div style="text-align:right;">
                    <span class="chip ${isAlert ? 'warning' : 'success'}">${log.status}</span>
                    <div class="meta">${log.time}</div>
                </div>
            </div>
        `;
    }).join('');
};

const renderValidations = () => {
    const container = document.getElementById('validation-history');
    if (!container) return;
    container.innerHTML = `
        <table class="table">
            <thead><tr><th>Cuenta</th><th>Titular</th><th>Banco</th><th>Estado</th><th>Actualizado</th></tr></thead>
            <tbody>
                ${db.validations.map((val) => `
                    <tr>
                        <td>${val.account}</td>
                        <td>${val.holder}</td>
                        <td>${val.bank}</td>
                        <td><span class="chip ${val.status === 'Validada' ? 'success' : val.status === 'Observada' ? 'warning' : 'info'}">${val.status}</span></td>
                        <td>${formatDate(val.updated)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
};

const renderNotifications = () => {
    const container = document.getElementById('notifications-list');
    if (!container) return;
    const unread = db.notifications.filter((n) => !n.read).length;
    const summaryEl = document.getElementById('notifications-unread');
    if (summaryEl) summaryEl.textContent = `${unread} pendientes`;

    container.innerHTML = db.notifications.map((n) => `
        <div class="list-item" style="border-color:${n.read ? 'var(--border)' : 'rgba(0,136,255,0.4)'}; background:${n.read ? 'rgba(255,255,255,0.02)' : 'rgba(0,136,255,0.06)'}">
            <div class="icon" style="background:${n.read ? 'rgba(255,255,255,0.04)' : 'rgba(0,136,255,0.18)'}">
                <span class="material-icons-outlined">${iconForNotification(n.type)}</span>
            </div>
            <div style="flex:1;">
                <div style="font-weight:600">${n.title}</div>
                <div class="meta">${n.detail}</div>
            </div>
            <div style="text-align:right;">
                <span class="chip ${n.read ? 'info' : 'success'}">${n.read ? 'Leída' : 'Nueva'}</span>
                <div class="meta">${n.time}</div>
            </div>
        </div>
    `).join('');
};

const iconForNotification = (type) => {
    const map = {
        pago: 'payments',
        seguridad: 'shield',
        proveedor: 'business',
        recaudacion: 'account_balance',
        empleados: 'group',
        validacion: 'verified_user',
        config: 'settings'
    };
    return map[type] || 'notifications';
};

const initPage = () => {
    setActiveNav();
    renderHeaderCounts();
    const page = window.PAGE || 'dashboard';
    const handlers = {
        dashboard: renderDashboard,
        empleados: () => { renderEmployees(); },
        pagos: () => { renderEmployees(); renderPayroll(); },
        transferencias: renderTransfers,
        proveedores: renderProviders,
        seguridad: renderSecurity,
        validacion: renderValidations,
        configuracion: () => {},
        notificaciones: renderNotifications
    };
    const handler = handlers[page];
    if (handler) handler();
};

document.addEventListener('DOMContentLoaded', initPage);
