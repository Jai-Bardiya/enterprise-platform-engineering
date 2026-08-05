import psutil


def get_system_metrics():
    return {
        "cpu": round(psutil.cpu_percent(interval=1), 2),
        "memory": round(psutil.virtual_memory().percent, 2),
        "disk": round(psutil.disk_usage("/").percent, 2),
    }
