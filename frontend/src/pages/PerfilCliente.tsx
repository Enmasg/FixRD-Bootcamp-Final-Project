import "./PerfilCliente";

const PerfilCliente = () => {
    return (
        <>
            {/* // Seccion Persona ///// MELANIE REINOSO--> */}
            
            <section className="persona-section">
                <div className="persona-container">
                    <div className="persona-left">
                        <img src="foto.jpg" className="persona-photo" alt="Client Photo" />

                        <h2 className="persona-name">María González</h2>
                        <p className="persona-info">32 años • Marketing Manager</p>
                        <p className="persona-location">Santo Domingo, RD</p>

                        <div className="persona-card">
                            <h3><i>💻</i> Digital Proficiency</h3>
                            <p>Alto - Usa tecnología diariamente</p>
                        </div>
                    </div>

                    <div className="persona-right">
                        <div className="persona-card">
                            <h3>🎯 Objetivos</h3>
                            <ul>
                                <li>Encontrar técnicos confiables rápidamente</li>
                                <li>Resolver problemas del hogar sin estrés</li>
                                <li>Obtener servicios de calidad</li>
                            </ul>
                        </div>

                        <div className="persona-card">
                            <h3>⚠️ Frustraciones</h3>
                            <ul>
                                <li>Técnicos no confiables</li>
                                <li>Precios poco transparentes</li>
                                <li>Falta de disponibilidad</li>
                            </ul>
                        </div>

                        <div className="persona-card">
                            <h3>❤️ Motivaciones</h3>
                            <ul>
                                <li>Mantener su hogar en perfecto estado</li>
                                <li>Ahorrrar tiempo en búsquedas</li>
                                <li>Evitar estrés innecesario</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Historia de Usuario --> */}
            <section className="user-story">
                <div className="user-story-card">
                    <h2>Historia de Usuario</h2>
                    <p>
                        "Como una profesional ocupada, quiero encontrar técnicos certificados
                        rápidamente para resolver problemas de mi hogar sin perder tiempo ni
                        comprometer la calidad del servicio."
                    </p>
                </div>
            </section>

            {/* <!-- Flujo de Usuario --> */}
            <section className="user-flow-section">
                <h2>Flujo de Usuario</h2>

                <div className="user-flow">
                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="home-7-fill.png" alt="home" />
                        </div>
                        <p>Llega a la página principal de FixRD</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="login-box-fill.png" alt="login-box" />
                        </div>
                        <p>Inicia sesión como Cliente</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="search-line.png" alt="search" />
                        </div>
                        <p>Busca técnico por categoría</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="filter-fill.png" alt="filter" />
                        </div>
                        <p>Aplica filtros (calificación, precio, ubicación)</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="user-fill.png" alt="user-icon" />
                        </div>
                        <p>Abre perfil del técnico</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="cursor-fill.png" alt="cursor" />
                        </div>
                        <p>Hace clic en "Solicitar Servicio"</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle"><img src="news-line.png" alt="" /></div>
                        <p>Completa formulario de solicitud</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="chat-check-line.png" alt="check" />
                        </div>
                        <p>Confirma la reserva</p>
                    </div>

                    <div className="flow-line"></div>

                    <div className="flow-step">
                        <div className="icon-circle">
                            <img src="dashboard-3-fill.png" alt="Dashboard" />
                        </div>
                        <p>Ve el estado en el Dashboard</p>
                    </div>
                </div>
            </section>
            {/*     !--///// MELANIE REINOSO---

    <!-- ========================================================= -->
    <!-- JOUSTINTT -->
    <!-- ========================================================= -->
 */}
            <section className="wrap">
                <div className="grid-top">
                    {/*  <!-- Columna izquierda --> */}
                    <div className="col left-col">
                        <div className="card profile">
                            <img className="avatar" src="download (11).jpeg" alt="Avatar" />
                            <h3>María González</h3>
                            <p className="muted">Santo Domingo, RD</p>
                            <button className="btn">Editar Perfil</button>
                        </div>

                        <div className="card notifications">
                            <h4>Notificaciones</h4>

                            <div className="notify-row">
                                <span>Email</span>
                                <label className="swich">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            <div className="notify-row">
                                <span>SMS</span>
                                <label className="swich">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            <div className="notify-row">
                                <span>Push</span>
                                <label className="swich">
                                    <input type="checkbox" checked />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Columna central --> */}
                    <div className="col center-col">
                        <div className="card activity">
                            <h4>Mi Actividad</h4>

                            <div className="task">
                                <div>
                                    <strong>Reparacion de Aire Acondicionado</strong>
                                    <div className="muted small">28/11/2025</div>
                                </div>
                                <span className="badge green">Activo</span>
                                <a className="details" href="#">Ver detalles</a>
                            </div>

                            <div className="task">
                                <div>
                                    <strong>Instalacion Lámpara</strong>
                                    <div className="muted small">28 Nov 2025</div>
                                </div>
                                <span className="badge yellow">Pendiente</span>
                                <a className="details" href="#">Ver detalles</a>
                            </div>

                            <div className="task">
                                <div>
                                    <strong>Reparación Plomería</strong>
                                    <div className="muted small">8 Nov 2024</div>
                                </div>
                                <span className="badge blue">Completado</span>
                                <a className="details" href="#">Ver Detalles</a>
                            </div>
                        </div>
                    </div>

                    {/*   <!-- Columna derecha --> */}
                    <div className="col right-col">
                        <div className="card small">
                            <h4>Historial de Servicios</h4>
                            <ul className="history">
                                <li>
                                    <strong>Carlos Martínez</strong>
                                    <span className="muted small">Nov 28</span><br />
                                    <span className="muted">Plomería</span>
                                </li>
                                <li>
                                    <strong>Ana Rodríguez</strong>
                                    <span className="muted small">Oct 25</span><br />
                                    <span className="muted">Electricidad</span>
                                </li>
                                <li>
                                    <strong>Luis Fernández</strong>
                                    <span className="muted small">Oct 15</span><br />
                                    <span className="muted">Carpintería</span>
                                </li>
                            </ul>
                        </div>

                        <div className="card small">
                            <h4>Reseñas Escritas</h4>
                            <p className="mutede">Has escirto 3 reseñas</p>
                            <a href="#">Ver todas</a>
                        </div>

                        <div className="small actions">
                            <ul className="action-list">
                                <li>⚙️ Configuracion de Cuenta</li>
                                <li>🧭 Preferencias</li>
                                <li className="danger">⎋ Cerrar Sesión</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*  <!-- Sección inferior técnica --> */}
                <section className="technical card big">
                    <h3>Información Técnica del Perfil</h3>

                    <div className="tech-grid">
                        <div className="info-card">
                            <h5>Información Personal</h5>
                            <p><strong>Nombre:</strong>María González</p>
                            <p><strong>Teléfono:</strong>+1 (945) 555-0123</p>
                            <p><strong>Email:</strong>maria@email.com</p>
                            <p><strong>Ubicación:</strong>Santo Domingo, RD</p>
                        </div>

                        <div className="info-card">
                            <h5>Configuracion de Cuenta</h5>
                            <p><strong>Contraseña:</strong> ••••••••</p>
                            <p><strong>Verificación:</strong>✓ Verificado</p>
                            <p><strong>Idioma:</strong>Español</p>
                        </div>

                        <div className="info-card">
                            <h5>Soluciones Activas</h5>
                            <p>2 soliciones en proceso</p>
                        </div>

                        <div className="info-card">
                            <h5>Historial de Servicios</h5>
                            <p>15 servicios completados</p>
                            <p>Clificación promedio: 4.8/5</p>
                        </div>
                    </div>
                </section>
            </section>

            {/* <!--JOUSTINTT--> */}
        </>
    );
};

export default PerfilCliente;
