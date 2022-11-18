<script>
	import {
		Card,
		CardBody,
		Container,
		Modal,
		ModalBody,
		ModalHeader,
		Row,
		Col,
		Label
	} from "sveltestrap";
	import FullCalendar, { Draggable } from "svelte-fullcalendar";
	import dayGridPlugin from "@fullcalendar/daygrid";
	import interactionPlugin from "@fullcalendar/interaction";
	import BootstrapTheme from "@fullcalendar/bootstrap";
	import { CalendarIcon } from "svelte-feather-icons";
	import CDeleteModal from "../../Components/Common/CDeleteModal.svelte";

	import UpcommingEvents from "./UpcommingEvents.svelte";

	import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";
	import CalendarEventsList from "../../common/data/calender";

	let isOpen = false;
	let calendarComponentRef;
	let calendarWeekends = true;
	let modalcategory = false;
	let setEvent = {};
	let isedit = false;
	let setSelectedDay = "";

	let deleteModal = false;

	const toggle = () => {
		isOpen = !isOpen;
		if (!isOpen) {
			setTimeout(() => {
				setEvent = {};

				isedit = false;
			}, 500);
		}
	};

	const eventData1 = {
		id: Math.floor(Math.random() * 100),
		title: "New Event Planning",
		start: new Date(),
		allDay: false,
		class: "bg-success text-white",
	};

	const eventData2 = {
		id: Math.floor(Math.random() * 100),
		title: "Meeting",
		start: new Date(),
		allDay: false,
		class: "bg-info text-white",
	};

	const eventData3 = {
		id: Math.floor(Math.random() * 100),
		title: "Generating Reports",
		start: new Date(),
		allDay: false,
		class: "bg-warning text-white",
	};

	const eventData4 = {
		id: Math.floor(Math.random() * 100),
		title: "Create New theme",
		start: new Date(),
		allDay: false,
		class: "bg-danger text-white",
	};

	function handleDateClick(arg) {
		setSelectedDay = arg;
		toggle();
	}

	let options = {
		plugins: [BootstrapTheme, dayGridPlugin, interactionPlugin],
		events: CalendarEventsList.events,
		weekends: { calendarWeekends },
		themeSystem: "bootstrap",
		handleWindowResize: true,
		slotDuration: "00:15:00",
		editable: true,
		droppable: true,
		selectable: true,
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth,dayGridWeek,dayGridDay",
		},
		dateClick: (event) => handleDateClick(event.dateStr),
		eventClick: (event) => handleEventClick(event),
	};

	const handleEventClick = (arg) => {
		const event = arg.event;

		setEvent = {
			id: parseInt(event.id),
			title: event.title,
			title_category: event.title_category,
			start: event.start,
			className: event.classNames,
			category: event.classNames[0],
			event_category: event.classNames[0],
		};

		isedit = true;

		toggle();
	};

	const toggleCategory = () => {
		modalcategory = !modalcategory;
	};

	const handleValidEventSubmitcategory = ({
		target: {
			elements: { category, title },
		},
	}) => {
		const { events } = options;

		const calendarEvents = [
			...events,
			{
				id: Math.floor(Math.random() * 100),
				title: title.value,
				start: new Date(),
				allDay: false,
				className: category.value + " text-white",
			},
		];

		options = {
			...options,
			events: calendarEvents,
		};

		toggleCategory();
	};

	const handleValidEventSubmit = ({
		target: {
			elements: { category, title },
		},
	}) => {
		if (isedit) {
			const { events } = options;

			const updateEvent = {
				id: setEvent.id,
				title: title.value,
				className: category.value + " text-white",
				start: setEvent.start,
				allDay: false,
			};
			// update event

			const i = CalendarEventsList.events.findIndex(
				(t) => t.id === updateEvent.id
			);

			CalendarEventsList.events[i] = updateEvent;

			CalendarEventsList.events = [...events];

			options = {
				...options,
				events: CalendarEventsList.events,
			};
		} else {
			const { events } = options;

			const calendarEvents = [
				...events,
				{
					id: Math.floor(Math.random() * 100),
					title: title.value,
					start: setSelectedDay ? setSelectedDay : new Date(),
					allDay: false,
					className: category.value + " text-white",
				},
			];
			options = {
				...options,
				events: calendarEvents,
			};
		}

		setSelectedDay = "";
		toggle();
	};

	const handleDeleteEvent = () => {
		var calendarEvents = CalendarEventsList.events.filter((e, i) => {
			return e.id !== setEvent.id
		});

		calendarEvents = [...calendarEvents];

		options = {
			...options,
			events: calendarEvents,
		};

		setDeleteModal(false);
		toggle();
	};

	const setDeleteModal = (status) => {
		deleteModal = status;
	};
</script>

<svelte:head>
	<title>Calendar | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<CDeleteModal
  show={deleteModal}
  onDeleteClick={handleDeleteEvent}
  onCloseClick={() => setDeleteModal(false)}
/>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Calendar" pageTitle="Apps" />
		<Row>
			<Col xs={12}>
				<Row>
					<Col xl={3}>
						<Card class="card-h-100">
							<CardBody>
								<button
									class="btn btn-primary w-100"
									id="btn-new-event"
									on:click={toggle}
								>
									<i class="mdi mdi-plus" /> Create New Event
								</button>

								<div id="external-events">
									<br />
									<p class="text-muted">
										Drag and drop your event or click in the
										calendar
									</p>
									<Draggable
										eventData={eventData1}
										class="draggable"
									>
										<div class="bg-soft-success external-event fc-event text-success"
										>
											<i
												class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
											/>
											New Event Planning
										</div>
									</Draggable>

									<Draggable
										eventData={eventData2}
										class="draggable"
									>
										<div class="bg-soft-info external-event fc-event text-info"
										>
											<i
												class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
											/>
											Meeting
										</div>
									</Draggable>

									<Draggable
										eventData={eventData3}
										class="draggable"
									>
										<div class="bg-soft-warning external-event fc-event text-warning"
										>
											<i
												class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
											/>
											Generating Reports
										</div>
									</Draggable>

									<Draggable
										eventData={eventData4}
										class="draggable"
									>
										<div class="bg-soft-danger external-event fc-event text-danger"
										>
											<i
												class="mdi mdi-checkbox-blank-circle font-size-11 me-2"
											/>
											Create New theme
										</div>
									</Draggable>
								</div>
							</CardBody>
						</Card>
						<div>
							<h5 class="mb-1">Upcoming Events</h5>
							<p class="text-muted">
								Don't miss scheduled events
							</p>
							<div class="pe-2 me-n1 mb-3"
								data-simplebar
								style="height: 400px">
								<div id="upcoming-event-list">
									{#if CalendarEventsList.defaultevent}
										{#each CalendarEventsList.defaultevent as event}
											<UpcommingEvents {event} />
										{/each}
									{/if}
								</div>
							</div>
						</div>
						<Card>
							<CardBody class="bg-soft-info">
								<div class="d-flex">
									<div class="flex-shrink-0">
										<CalendarIcon
											class="text-info icon-dual-info"
											size="24"
										/>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6 class="fs-15">
											Welcome to your Calendar!
										</h6>
										<p class="text-muted mb-0">
											Event that applications book will
											appear here. Click on an event to
											see the details and manage
											applicants event.
										</p>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl={9}>
						<Card className="card-h-100">
							<CardBody>
								<FullCalendar
									bind:this={calendarComponentRef}
									{options}
								/>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>
</div>
<Modal {isOpen}>
	<ModalHeader {toggle} tag="h4">
		{!!isedit ? "Edit Event" : "Add Event"}
	</ModalHeader>
	<ModalBody>
		<form on:submit|preventDefault={handleValidEventSubmit}>
			<Row>
				<Col class="col-12">
					<div class="mb-3">
						<Label class="form-label" for="title">Event Name</Label>
						<input
							type="text"
							class="form-control"
							name="title"
							placeholder="Event Name"
							value={setEvent && setEvent.title
								? setEvent.title
								: ""}
						/>
					</div>
				</Col>
				<Col class="col-12">
					<div class="mb-3">
						<Label class="form-label" for="category">Category</Label
						>
						<select
							name="category"
							class="form-control form-select"
							placeholder="Select Category"
							value={setEvent ? setEvent.category : "bg-primary"}
						>
							<option value="bg-soft-danger">Danger</option>
							<option value="bg-soft-success">Success</option>
							<option value="bg-soft-primary">Primary</option>
							<option value="bg-soft-info">Info</option>
							<option value="bg-soft-dark">Dark</option>
							<option value="bg-soft-warning">Warning</option>
						</select>
					</div>
				</Col>
			</Row>
			<Row class="mt-2">
				<Col xs="12" class="text-end">
					{#if !!isedit}
						<button
							type="button"
							class="btn btn-danger"
							on:click={() => setDeleteModal(true)}>Delete</button
						>
					{/if}
					<button
						type="button"
						class="btn btn-light me-2"
						on:click={toggle}>
						Close
					</button>
					<button type="submit" class="btn btn-success save-event">
						Save
					</button>
				</Col>
			</Row>
		</form>
	</ModalBody>
</Modal>

<Modal isOpen={modalcategory}>
	<ModalHeader {toggleCategory} tag="h4">
		{!!isedit ? "Edit Event" : "Add Event"}
	</ModalHeader>
	<ModalBody>
		<form on:submit|preventDefault={handleValidEventSubmitcategory}>
			<Row>
				<Col class="col-12">
					<div class="mb-3">
						<Label class="form-label" for="title">Event title</Label
						>

						<input
							type="text"
							class="form-control"
							name="title"
							placeholder="Event Name"
							value=""
						/>
					</div>
				</Col>
				<Col class="col-12">
					<div class="mb-3">
						<Label class="form-label" for="category">Category</Label
						>
						<select
							name="category"
							class="form-control form-select"
							placeholder="Select Category"
						>
							<option value="bg-soft-danger">Danger</option>
							<option value="bg-soft-success">Success</option>
							<option value="bg-soft-primary">Primary</option>
							<option value="bg-soft-info">Info</option>
							<option value="bg-soft-dark">Dark</option>
							<option value="bg-soft-warning">Warning</option>
						</select>
					</div>
				</Col>
			</Row>
			<Row class="mt-2">
				<Col xs="12" class="text-end">
					<button
						type="button"
						class="btn btn-light me-2"
						on:click={toggleCategory}>
						Close
					</button>

					<button type="submit" class="btn btn-success save-event">
						Save
					</button>
				</Col>
			</Row>
		</form>
	</ModalBody>
</Modal>
